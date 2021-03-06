```js
const { default: Gapped } = require('../Gapped');
const { default: Tooltip } = require('../Tooltip');

<Gapped vertical>
  <div>Имя показывается при наведении:</div>
  <Gapped>
    {Icon.getAllNames().map(name => (
      <Tooltip key={name} render={() => name}>
        <Icon name={name} />
      </Tooltip>
    ))}
  </Gapped>
</Gapped>;
```

<details><summary>Маппинг старых иконок к новым</summary>

```json static
{
  "ruble": "Ruble",
  "circle": "Dot12",
  "cloud": "Cloud",
  "baseline": "Baseline",
  "error": "Error",
  "warning": "Warning",
  "ok": "Ok",
  "star": "Star",
  "fired": "Fired",
  "search": "Search",
  "cert": "Certificate",
  "smile": "EmoticonHappy",
  "sad": "EmoticonSad",
  "add": "Add",
  "remove": "Delete",
  "edit": "Edit",
  "print": "Print",
  "envelop": "Mail",
  "undo": "Undo",
  "forward": "ArrowChevron2Right",
  "backward": "ArrowChevron2Left",
  "download": "Download",
  "tag": "Tag",
  "video": "Video",
  "gear": "Settings",
  "card": "Card",
  "import": "Import",
  "list": "ListRows",
  "groups": "ListGroup",
  "menu": "Menu",
  "minus": "Remove",
  "up-down": "ArrowParallelVertical",
  "user": "User",
  "wait": "Clock",
  "trash": "Trash",
  "calendar": "Calendar",
  "doc": "DocumentSolid",
  "doc-new": "DocumentAdd",
  "doc-duplicate": "DocumentCopy",
  "export": "Export",
  "folder": "DocumentFolder",
  "refresh": "Refresh",
  "sum": "Sum",
  "shipment": "Shipment",
  "upload": "Upload",
  "opened": "LockOpened",
  "closed": "LockClosed",
  "doc-group": "DocumentGroup",
  "clear": "Clear",
  "doc-doc": "DocumentTypeDoc",
  "doc-pdf": "DocumentTypePdf",
  "doc-txt": "DocumentTypeTxt",
  "doc-xls": "DocumentTypeXls",
  "doc-xml": "DocumentTypeXml",
  "fx": "Function",
  "help": "HelpBook",
  "help-o": "HelpLite",
  "logout": "Logout",
  "facebook": "Facebook",
  "phone": "Phone",
  "twitter": "Twitter",
  "vk": "Vkontakte",
  "grid": "Grid",
  "infinity": "Infiniti",
  "arrow-bottom": "ArrowBoldDown",
  "arrow-right": "ArrowBoldRight",
  "arrow-top": "ArrowBoldUp",
  "eye-slash": "EyeClosed",
  "eye": "EyeOpened",
  "clip": "Attach",
  "money": "Coin",
  "stats": "Statistic",
  "ellipsis": "MenuDots",
  "sort": "ArrowTriangleUpDown",
  "caret-right": "ArrowTriangleRight",
  "caret-left": "ArrowTriangleLeft",
  "caret-bottom": "ArrowTriangleDown",
  "caret-top": "ArrowTriangleUp",
  "map-pin": "MapPin",
  "arrow-left": "ArrowBoldLeft",
  "play-forward": "Forward",
  "play-backward": "Backward",
  "right": "Reply",
  "left": "Skip",
  "comment-o": "CommentLite",
  "help-circle": "HelpDot",
  "odnoklassniki": "Odnoklassniki",
  "youtube": "Youtube",
  "angle-bottom": "ArrowChevronDown",
  "angle-top": "ArrowChevronUp",
  "coins": "Coins",
  "user-gear": "UserSettings",
  "home": "Home",
  "comment": "CommentSolid",
  "rss": "Rss",
  "doc-auto": "DocumentRefresh",
  "filter": "Filter",
  "new-window": "NewWindow",
  "link": "Link",
  "google-plus": "GooglePlus",
  "doc-rtf": "DocumentTypeRtf",
  "angle-left": "ArrowChevronLeft",
  "angle-right": "ArrowChevronRight",
  "login": "Login",
  "circle-small": "Dot8",
  "comp": "PC",
  "android": "Android",
  "pin": "Pin",
  "bell": "NotificationBell",
  "right-left": "ArrowParallelHorizontal",
  "bulb": "Lightbulb",
  "info": "Info",
  "heart": "Heart",
  "hourglass": "Loading",
  "instagram": "Instagram",
  "thumbs-up": "ThumbUp",
  "thumbs-down": "ThumbDown",
  "marker": "Marker",
  "archive": "ArchivePack",
  "unarchive": "ArchiveUnpack",
  "envelop-o": "Mail2",
  "mail-in": "Mail2In",
  "mail-out": "Mail2Out",
  "cart-o": "ShoppingCartLite",
  "cart": "ShoppingCartSolid",
  "services": "Handshake",
  "suitcase": "Briefcase",
  "doc-revise": "DocumentCheck",
  "flag-o": "FlagLite",
  "flag": "FlagSolid",
  "circle-o": "Dot12Lite",
  "circle-small-o": "Dot8Lite",
  "font-size": "FontSize",
  "maximize": "ArrowSizeMax",
  "minimize": "ArrowSizeMin",
  "doc-o": "DocumentLite",
  "arrow-up-right": "ArrowSize1",
  "arrow-down-right": "ArrowSize2",
  "arrow-down-left": "ArrowSize3",
  "arrow-up-left": "ArrowSize4",
  "vk-o": "Vkontakte2",
  "facebook-o": "Facebook2",
  "twitter-o": "Twitter2",
  "odnoklassniki-o": "Odnoklassniki2",
  "google-plus-o": "GooglePlus2",
  "phone-o": "Phone2",
  "rss-o": "Rss2",
  "people": "People",
  "child": "Baby",
  "send-o": "Send",
  "send": "Send2",
  "send-h": "Send3",
  "copy": "Copy",
  "enter": "ArrowCorner1",
  "circle-o-dotted": "Dot12Dashed",
  "vacation": "Vacation",
  "sick": "Medical",
  "redo": "Redo",
  "star-o": "Star2",
  "doc-convert": "DocumentConvert",
  "apple": "Apple",
  "windows": "Windows",
  "car": "OwnershipCar",
  "boat": "OwnershipBoat",
  "document-declined": "DocumentCheck2",
  "cash": "ShopCashregister",
  "cash receipt": "ShopReceipt",
  "smartphone": "DeviceSmartphone",
  "drag": "ArrowDrag",
  "kebab": "MenuKebab",
  "comment-add": "CommentLiteAdd",
  "shutter": "ArrowTriangleUpDown2",
  "smartphone-slash": "DeviceSmartphoneNo",
  "telegram": "Telegram",
  "telegram-o": "Telegram2",
  "heart-o": "HeartLite",
  "office": "HomeOffice",
  "arrows-h-aside": "ArrowTriangleUpDown3",
  "arrows-h-inside": "ArrowTriangleUpDown4",
  "tree-structure": "StructureTree",
  "calculator": "Calculator",
  "ok-double": "OkDouble",
  "key": "Key",
  "flash-drive": "USB"
}
```

</details>
