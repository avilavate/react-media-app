const artist ={
  "artists" : {
    "href" : "https://api.spotify.com/v1/search?query=Elvis&type=artist&offset=0&limit=1",
    "items" : [ {
      "external_urls" : {
        "spotify" : "https://open.spotify.com/artist/1c22GXH30ijlOfXhfLz9Df"
      },
      "followers" : {
        "href" : null,
        "total" : 127583
      },
      "genres" : [ "latin", "latin hip hop", "latin pop", "merengue", "reggaeton", "tropical" ],
      "href" : "https://api.spotify.com/v1/artists/1c22GXH30ijlOfXhfLz9Df",
      "id" : "1c22GXH30ijlOfXhfLz9Df",
      "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/b36c3ef9e99dbe104347e48054fb88bde73a191c",
        "width" : 640
      }, {
        "height" : 320,
        "url" : "https://i.scdn.co/image/1c29b436aee46915bacc7ec5fda29fff2e7795d3",
        "width" : 320
      }, {
        "height" : 160,
        "url" : "https://i.scdn.co/image/0d1500e23b1fa9e2c12b43e0711ce4a2ad1768b3",
        "width" : 160
      } ],
      "name" : "Elvis Crespo",
      "popularity" : 67,
      "type" : "artist",
      "uri" : "spotify:artist:1c22GXH30ijlOfXhfLz9Df"
    } ],
    "limit" : 1,
    "next" : "https://api.spotify.com/v1/search?query=Elvis&type=artist&offset=1&limit=1",
    "offset" : 0,
    "previous" : null,
    "total" : 359
  }
}

export default artist;