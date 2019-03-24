;(function () {	// Document on load.

    // <div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">
    //     <div class="blog-entry">
    //     <a href="#" class="blog-img"><img src="images/img-1.jpg" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>
    //     <div class="desc">
    //     <h3><a href="#">Inspirational Website</a></h3>
    // <span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>
    // <p>Design must be functional and functionality must be translated into visual aesthetics</p>
    // <a href="#" class="lead">Read More <i class="icon-arrow-right3"></i></a>
    // </div>
    // </div>
    // </div>

    var loadBlog = function () {
        $.ajax({
            url:"/article/all",
            contentType: "application/json",
            success:function(result){
                console.log(result);
                for (var item in result){
                    var temp = '<div class="col-md-3 col-sm-6 col-padding animate-box" data-animate-effect="fadeInLeft">' +
                        '<div class="blog-entry">' +
                        '<a href="#" class="blog-img"><img src="images/img-1.jpg" class="img-responsive" alt="Free HTML5 Bootstrap Template by FreeHTML5.co"></a>' +
                        '<div class="desc">' +
                        '<h3><a href="#">' + item.articleTitle + '</a></h3>' +
                        '<span><small>by Admin </small> / <small> Web Design </small> / <small> <i class="icon-comment"></i> 14</small></span>'+
                        '<p>' + item.articleInfo +'</p>'+
                        '<a href="#" class="lead">Read More <i class="icon-arrow-right3"></i></a>'+
                        '</div>'+
                        '</div>'+
                        '</div>'
                    $('.row-bottom-padded-md').append(temp);
                }
            }});
    }
    $(function(){
        loadBlog();
    });


}());