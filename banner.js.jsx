var Banner = React.createClass({
  componentDidMount: function(){
    $('#pm-slider').PMSlider({
      speed : 520,
      easing : 'ease',
      loop : true,
      controlNav : true, //false = no bullets / true = bullets / 'thumbnails' activates thumbs
      controlNavThumbs : true,
      animation : 'fade',
      fullScreen : false,
      slideshow : true,
      slideshowSpeed : 7000,
      pauseOnHover : true,
      arrows : true,
      fixedHeight : true,
      fixedHeightValue : 800,
      touch : true,
      progressBar : false
    });

    },
    render: function() {
        var index = 0;
        var banners = this.props.collection.map(function(item){

          item.key = index;
          index++;

          return (
            <BannerItem key={item.id} banner={item} />
          )
        });
        return (
            <div id="pm-pulse-container" className="pm-pulse-container">
                <div id="pm-pulse-loader">
                    <img src="js/pulse/img/ajax-loader.gif" alt="slider loading"/>
                </div>
                <div id="pm-slider" className="pm-slider">
                    <div id="pm-slider-progress-bar"></div>
                    <ul className="pm-slides-container" id="pm_slides_container">
                      {banners}
                    </ul>
                </div>
            </div>
      )}
  });
