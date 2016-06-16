const csjs = require('csjs');

module.exports = csjs`
.tabs {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
  background: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.tabs {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  line-height: 24px;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.tabs span {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid #d3d6db;
  color: #69707a;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  margin-bottom: -1px;
  padding: 6px 12px;
  vertical-align: top;
}

.tabs span:hover {
  border-bottom-color: #222324;
  color: #222324;
}

.tabs li {
  display: block;
}

.tabs li.is-active span {
  border-bottom-color: #1fc8db;
  color: #1fc8db;
}

.tabs ul {
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  border-bottom: 1px solid #d3d6db;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
}

.tabs ul.is-left {
  padding-right: 10px;
}

.tabs ul.is-center {
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}

.tabs ul.is-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  padding-left: 10px;
}

.tabs .icon:first-child {
  margin-right: 8px;
}

.tabs .icon:last-child {
  margin-left: 8px;
}

.tabs.is-centered ul {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.tabs.is-right ul {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.tabs.is-boxed span {
  border: 1px solid transparent;
  border-radius: 3px 3px 0 0;
  padding-bottom: 5px;
  padding-top: 5px;
}

.tabs.is-boxed span:hover {
  background: #f5f7fa;
  border-bottom-color: #d3d6db;
}

.tabs.is-boxed li.is-active span {
  background: #fff;
  border-color: #d3d6db;
  border-bottom-color: transparent !important;
}

.tabs.is-fullwidth li {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.tabs.is-toggle span {
  border: 1px solid #d3d6db;
  margin-bottom: 0;
  padding-bottom: 5px;
  padding-top: 5px;
  position: relative;
}

.tabs.is-toggle span:hover {
  background: #f5f7fa;
  border-color: #aeb1b5;
  z-index: 2;
}

.tabs.is-toggle li + li {
  margin-left: -1px;
}

.tabs.is-toggle li:first-child span {
  border-radius: 3px 0 0 3px;
}

.tabs.is-toggle li:last-child span {
  border-radius: 0 3px 3px 0;
}

.tabs.is-toggle li.is-active span {
  background: #1fc8db;
  border-color: #1fc8db;
  color: white;
  z-index: 1;
}

.tabs.is-toggle ul {
  border-bottom: none;
}

.tabs.is-small {
  font-size: 11px;
}

.tabs.is-small span {
  padding: 2px 8px;
}

.tabs.is-small.is-boxed span, .tabs.is-small.is-toggle span {
  padding-bottom: 1px;
  padding-top: 1px;
}

.tabs.is-medium {
  font-size: 18px;
}

.tabs.is-medium span {
  padding: 10px 16px;
}

.tabs.is-medium.is-boxed span, .tabs.is-medium.is-toggle span {
  padding-bottom: 9px;
  padding-top: 9px;
}

.tabs.is-large {
  font-size: 28px;
}

.tabs.is-large span {
  padding: 14px 20px;
}

.tabs.is-large.is-boxed span, .tabs.is-large.is-toggle span {
  padding-bottom: 13px;
  padding-top: 13px;
}
`;
