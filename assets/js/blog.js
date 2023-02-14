
function getBlogPosts() {
    // Replace 'YOUR_API_KEY' with your actual API key
    var apiKey = 'AIzaSyAK8UHepqhzE4czfNj7wVwB1TDCWxsdw5w';
    
    // Replace 'YOUR_BLOG_ID' with the ID of your actual Blogger blog
    var blogId = '2441471836139444747';
    
    // Build the URL for the Blogger API request
    var url = 'https://www.googleapis.com/blogger/v3/blogs/' + blogId + '/posts?key=' + apiKey;

    var domainName = 'https://kingdavidmassage.com';
    
    // Make the API request using the fetch() method
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var posts = data.items;

        // Loop through the posts and display them on the page
        for (var i = 0; i < posts.length; i++) {

            var post = posts[i];
            var imgEndIndex;
            // Create a new HTML element for the post
            var postElement = document.createElement('div');

            // Set the post content
            postElement.innerHTML = `<h2><a href="${domainName}/blog-post.html?id=` + post.id + '">' + post.title + '</a></h2>' +
            '<p><em>Published on ' + new Date(post.published).toLocaleDateString() + '</em></p>';

            var imgStartIndex = post.content.indexOf('<img ');
            if (imgStartIndex !== -1) {
                imgEndIndex = post.content.indexOf('>', imgStartIndex) + 1;
                var imgTag = post.content.substring(imgStartIndex, imgEndIndex);

                var srcStartIndex = imgTag.indexOf('src="') + 5;
                var srcEndIndex = imgTag.indexOf('"', srcStartIndex);
                var src = imgTag.substring(srcStartIndex, srcEndIndex);

                postElement.innerHTML += '<img src="' + src + '" alt="Post image">';
            }
            
            postElement.innerHTML += '<p>' + post.content.slice(imgEndIndex, imgEndIndex + 200) + '...</p>' +
            `<p><a href="${domainName}/blog-post.html?id=` + post.id + '">Read more</a></p>';

            // Add the post to the page
            document.getElementById('posts').appendChild(postElement);
        }
    });
  }


//   get post id


function getPost() {
    
    function getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    var postId = getParameterByName('id');

    var apiKey = 'AIzaSyAK8UHepqhzE4czfNj7wVwB1TDCWxsdw5w';

    var blogId = '2441471836139444747';

    var url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${postId}?key=${apiKey}`

    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(post) {  

        var postElement = document.createElement('div');

        postElement.innerHTML = '<h2>' + post.title + '</h2>' +
        '<p><em>Published on ' + new Date(post.published).toLocaleDateString() + '</em></p>';

        postElement.innerHTML += '<p>' + post.content + '</p>';

        document.getElementById('post').appendChild(postElement);
    });

}

