import pageConfig from '../config.js'

export const SET_MENU_COLLAPSE = 'SET_MENU_COLLAPSE'
export const SAVE_DASHBOARD = 'SAVE_DASHBOARD'
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
export const SAVE_MENU_CATEGORY = 'SAVE_MENU_CATEGORY'

export const setMenuCollapse = menuVisible => ({
  type: SET_MENU_COLLAPSE,
  menuVisible
})

export const SheetUrl = fileId => (
  `https://spreadsheets.google.com/feeds/list/${fileId}/od6/public/values?alt=json`
)

export const DocUrl = fileId => (
  `https://docs.google.com/feeds/download/documents/export/Export?id=${fileId}&exportFormat=html`
)

export const ImageUrl = fileId => (
  `https://drive.google.com/uc?export=download&id=${fileId}`
)

const saveDashBoard = boardData => ({
  type: SAVE_DASHBOARD,
  boardData
})

const saveMenuCategory = categorys => ({
  type: SAVE_MENU_CATEGORY,
  categorys
})

export const setActiveCategory = activeCategory => ({
  type: SET_ACTIVE_CATEGORY,
  activeCategory
})

export const loadDashBoard = () => dispatch => (
  fetch(SheetUrl(pageConfig.dashboardId))
  .then(response => response.json())
  .then(json => {
    dispatch(saveDashBoard(json.feed.entry));
    var categorys = {};
    json.feed.entry.map((item,i) => {
      if (categorys[item.gsx$category.$t] === undefined) {
        categorys = {...categorys, [item.gsx$category.$t]:[]};
      }
      categorys[item.gsx$category.$t].push({
        index:i,
        title:item.gsx$title.$t,
        subtitle:item.gsx$subtitle.$t,
        fileId:item.gsx$postid.$t,
        imageId:item.gsx$imageid.$t,
        lastUpdated:item.gsx$lastupdated.$t,
      });
    })
    dispatch(saveMenuCategory(categorys));
  })
)
