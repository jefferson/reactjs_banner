var BannerItem = React.createClass({
  render: function(){
    return (
      <li data-thumb={this.props.banner.foto.url} className={"pmslide_"+this.props.banner.key}>
        <img src={this.props.banner.foto.url} alt="img01" />
          <div className="pm-holder">
              <div className="pm-caption">
                  <h1><span>{this.props.banner.titulo}</span></h1>
                  <span className="pm-caption-decription">
                    {this.props.banner.subtitulo}
                  </span>
                  <a href="menus.html" className="pm-slide-btn animated">
                    {this.props.banner.nome_do_link}
                  <i className="fa fa-chevron-right"></i></a>
              </div>
          </div>
      </li>
    );
  }
})
