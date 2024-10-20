import requests

def fetch_songs():
    url = 'https://search-api.artlist.io/v2/graphql'
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

    query = '''
    query SongList($page: Int!, $songSortType: SongSortType!, $take: Int!, $vocalType: VocalType!, $bpmMax: Int, $bpmMin: Int, $durationMax: Int, $durationMin: Int, $excludedCategoryIds: [Int], $categoryIds: [Int], $searchTerm: String, $isWithStemsOnly: Boolean) {
      songList(page: $page, songSortType: $songSortType, take: $take, vocalType: $vocalType, bpmMax: $bpmMax, bpmMin: $bpmMin, durationMax: $durationMax, durationMin: $durationMin, excludedCategoryIds: $excludedCategoryIds, categoryIds: $categoryIds, searchTerm: $searchTerm, isWithStemsOnly: $isWithStemsOnly){
        songs {
          albumThumbFilePath
          albumImageFilePath
          albumId
          albumName
          albumNameForURL
          artistId
          artistName
          duration
          durationTime
          explicit
          featuredArtists
          isOriginal
          isNew
          isVocal
          lyrics
          MP3FilePath
          nameForURL
          primaryArtists
          assetTypeId
          sitePlayableFilePath
          songName
          songId
          waveSurferFilePath
          numberOfStems
          isPreRelease
          officialReleaseDate
          genreCategories {
            id
            name
            parentName
          }
          hook30End
          hook30Start
          versions {
            albumThumbFilePath
            albumImageFilePath
            albumId
            albumName
            albumNameForURL
            artistId
            artistName
            duration
            durationTime
            explicit
            featuredArtists
            isOriginal
            isNew
            isPreRelease
            officialReleaseDate
            isVocal
            lyrics
            MP3FilePath
            nameForURL
            primaryArtists
            assetTypeId
            sitePlayableFilePath
            songName
            songId
            waveSurferFilePath
            genreCategories {
              id
              name
              parentName
            }
          }
        }
        totalResults
      }
    }
    '''

    variables_template = {
        "isAuthenticated": False,
        "searchTerm": "",
        "typeId": 1,
        "take": 50,
        "songSortType": "STAFF_PICKS",
        "vocalType": "VOCAL_AND_INSTRUMENTS",
        "categoryIds": [],
        "excludedCategoryIds": [],
        "isWithStemsOnly": False
    }

    all_songs = []

    for page in range(1, 6):  # Pages 1 to 5
        variables = variables_template.copy()
        variables['page'] = page

        payload = {
            'query': query,
            'variables': variables
        }

        response = requests.post(url, json=payload, headers=headers)

        if response.status_code == 200:
            data = response.json()
            songs = data.get('data', {}).get('songList', {}).get('songs', [])
            all_songs.extend(songs)
            print(f"Fetched {len(songs)} songs from page {page}.")
        else:
            print(f"Query failed with status code {response.status_code} on page {page}.")
            print(f"Response: {response.text}")

    print(f"Total songs fetched: {len(all_songs)}")
    return all_songs

# Call the function
songs_data = fetch_songs()

# Optional: Do something with the fetched songs
# For example, print the names of the songs
for song in songs_data:
    print(f"Song ID: {song['songId']}, Name: {song['songName']}")
