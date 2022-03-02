var StickerPreview = createClass({
  render: function() {
    var entry = this.props.entry;
    var cmsName = entry.getIn(['data', 'name'])
    var cmsPath = entry.getIn(['data', 'path'])
    var cmsEmoji = entry.getIn(['data', 'emoji'])

    var htmlString =`{% include stickers/sticker.liquid %}`;

    return h('div', {"dangerouslySetInnerHTML": {"__html": htmlString}} );
  }
});

CMS.registerPreviewTemplate("stickers", StickerPreview);
