var VolumePreview = createClass({
    render: function() {
      var entry = this.props.entry;
      var cmsTitle = entry.getIn(['data', 'title'])
      var cmsVolumeNumber = entry.getIn(['data', 'volume-number'])
      var cmsCoverImage = entry.getIn(['data', 'cover', 'path']);
  
      var htmlString =`{% include journal/hero_image.liquid %}`;
  
      return h('div', {"dangerouslySetInnerHTML": {"__html": htmlString}} );
    }
  });
  
  CMS.registerPreviewTemplate("volumes", VolumePreview);
  