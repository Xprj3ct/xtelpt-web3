/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/XContext.js":
/*!*****************************!*\
  !*** ./context/XContext.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"XContext\": () => (/* binding */ XContext),\n/* harmony export */   \"XProvider\": () => (/* binding */ XProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst XContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst XProvider = ({ children  })=>{\n    const { 0: appStatus , 1: setAppStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentAccount , 1: setCurrentAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkIfWalletIsConnected();\n    }, []);\n    const checkIfWalletIsConnected = async ()=>{\n        if (!window.ethereum) return setAppStatus(\"noMetaMask\");\n        try {\n            const addressArray = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            if (addressArray.length > 0) {\n                setAppStatus(\"connected\");\n                setCurrentAccount(addressArray[0]);\n                createUserAccount(addressArray[0]);\n            } else {\n                router.push(\"/\");\n                setAppStatus(\"notConnected\");\n            }\n        } catch (err) {\n            router.push(\"/\");\n            setAppStatus(\"error\");\n        }\n    };\n    const connectWallet = async ()=>{\n        if (!window.ethereum) return setAppStatus(\"noMetaMask\");\n        try {\n            setAppStatus(\"loading\");\n            const addressArray = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            if (addressArray.length > 0) {\n                setCurrentAccount(addressArray[0]);\n                createUserAccount(addressArray[0]);\n            } else {\n                router.push(\"/\");\n                setAppStatus(\"notConnected\");\n            }\n        } catch (err) {\n            setAppStatus(\"error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(XContext.Provider, {\n        value: {\n            appStatus,\n            currentAccount,\n            connectWallet,\n            // tweets,\n            // fetchTweets,\n            setAppStatus\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\A-JO3L\\\\Desktop\\\\iJo3l\\\\Xtelpt\\\\xtelpt-web3\\\\frontend\\\\context\\\\XContext.js\",\n        lineNumber: 58,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1hDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEQ7QUFDbkI7QUFFaEMsTUFBTUksUUFBUSxpQkFBR0osb0RBQWEsRUFBRTtBQUVoQyxNQUFNSyxTQUFTLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUN2QyxNQUFNLEtBQUNDLFNBQVMsTUFBRUMsWUFBWSxNQUFJTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEtBQUNPLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUlSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3hELE1BQU0sS0FBQ1MsV0FBVyxNQUFFQyxjQUFjLE1BQUlWLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU1XLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUUxQkYsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1phLHdCQUF3QixFQUFFO0lBQzVCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFHUixNQUFNQSx3QkFBd0IsR0FBRyxVQUFZO1FBQ3pDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUUsT0FBT1IsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUN2RCxJQUFJO1lBQ0YsTUFBTVMsWUFBWSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDRSxPQUFPLENBQUM7Z0JBQ2pEQyxNQUFNLEVBQUUsY0FBYzthQUN2QixDQUFDO1lBQ0YsSUFBSUYsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQlosWUFBWSxDQUFDLFdBQVcsQ0FBQztnQkFDekJFLGlCQUFpQixDQUFDTyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDSSxpQkFBaUIsQ0FBQ0osWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU87Z0JBQ0xKLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDaEJkLFlBQVksQ0FBQyxjQUFjLENBQUM7WUFDOUIsQ0FBQztRQUNILEVBQUUsT0FBT2UsR0FBRyxFQUFFO1lBQ1pWLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNoQmQsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUVILE1BQU1nQixhQUFhLEdBQUcsVUFBWTtRQUM5QixJQUFJLENBQUNULE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLE9BQU9SLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDdkQsSUFBSTtZQUNGQSxZQUFZLENBQUMsU0FBUyxDQUFDO1lBRXZCLE1BQU1TLFlBQVksR0FBRyxNQUFNRixNQUFNLENBQUNDLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO2dCQUNqREMsTUFBTSxFQUFFLHFCQUFxQjthQUM5QixDQUFDO1lBRUYsSUFBSUYsWUFBWSxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUMzQlYsaUJBQWlCLENBQUNPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbENJLGlCQUFpQixDQUFDSixZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTztnQkFDTEosTUFBTSxDQUFDUyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNoQmQsWUFBWSxDQUFDLGNBQWMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsRUFBRSxPQUFPZSxHQUFHLEVBQUU7WUFDWmYsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQztJQUNMLHFCQUNBLDhEQUFDSixRQUFRLENBQUNxQixRQUFRO1FBQ2xCQyxLQUFLLEVBQUU7WUFDTG5CLFNBQVM7WUFDVEUsY0FBYztZQUNkZSxhQUFhO1lBQ2IsVUFBVTtZQUNWLGVBQWU7WUFDZmhCLFlBQVk7U0FJYjtrQkFFQUYsUUFBUTs7Ozs7aUJBQ1MsQ0FDbkI7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veC10ZXBsdC8uL2NvbnRleHQvWENvbnRleHQuanM/OWIyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY29uc3QgWFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2FwcFN0YXR1cywgc2V0QXBwU3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2N1cnJlbnRBY2NvdW50LCBzZXRDdXJyZW50QWNjb3VudF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2hlY2tJZldhbGxldElzQ29ubmVjdGVkKClcclxuICAgICAgfSwgW10pXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjaGVja0lmV2FsbGV0SXNDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRBcHBTdGF0dXMoJ25vTWV0YU1hc2snKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRyZXNzQXJyYXkgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9hY2NvdW50cycsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgaWYgKGFkZHJlc3NBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEFwcFN0YXR1cygnY29ubmVjdGVkJylcclxuICAgICAgICAgICAgc2V0Q3VycmVudEFjY291bnQoYWRkcmVzc0FycmF5WzBdKVxyXG4gICAgICAgICAgICBjcmVhdGVVc2VyQWNjb3VudChhZGRyZXNzQXJyYXlbMF0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIHNldEFwcFN0YXR1cygnbm90Q29ubmVjdGVkJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgIHNldEFwcFN0YXR1cygnZXJyb3InKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZXRoZXJldW0pIHJldHVybiBzZXRBcHBTdGF0dXMoJ25vTWV0YU1hc2snKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXRBcHBTdGF0dXMoJ2xvYWRpbmcnKVxyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCBhZGRyZXNzQXJyYXkgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxyXG4gICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgaWYgKGFkZHJlc3NBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnRBY2NvdW50KGFkZHJlc3NBcnJheVswXSlcclxuICAgICAgICAgICAgY3JlYXRlVXNlckFjY291bnQoYWRkcmVzc0FycmF5WzBdKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICBzZXRBcHBTdGF0dXMoJ25vdENvbm5lY3RlZCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBzZXRBcHBTdGF0dXMoJ2Vycm9yJylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICByZXR1cm4gKFxyXG4gIDxYQ29udGV4dC5Qcm92aWRlclxyXG4gIHZhbHVlPXt7XHJcbiAgICBhcHBTdGF0dXMsXHJcbiAgICBjdXJyZW50QWNjb3VudCxcclxuICAgIGNvbm5lY3RXYWxsZXQsXHJcbiAgICAvLyB0d2VldHMsXHJcbiAgICAvLyBmZXRjaFR3ZWV0cyxcclxuICAgIHNldEFwcFN0YXR1cyxcclxuICAgIC8vIGdldE5mdFByb2ZpbGVJbWFnZSxcclxuICAgIC8vIGN1cnJlbnRVc2VyLFxyXG4gICAgLy8gZ2V0Q3VycmVudFVzZXJEZXRhaWxzLFxyXG4gIH19XHJcbj5cclxuICB7Y2hpbGRyZW59XHJcbjwvWENvbnRleHQuUHJvdmlkZXI+XHJcbilcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiWENvbnRleHQiLCJYUHJvdmlkZXIiLCJjaGlsZHJlbiIsImFwcFN0YXR1cyIsInNldEFwcFN0YXR1cyIsImN1cnJlbnRBY2NvdW50Iiwic2V0Q3VycmVudEFjY291bnQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwicm91dGVyIiwiY2hlY2tJZldhbGxldElzQ29ubmVjdGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJhZGRyZXNzQXJyYXkiLCJyZXF1ZXN0IiwibWV0aG9kIiwibGVuZ3RoIiwiY3JlYXRlVXNlckFjY291bnQiLCJwdXNoIiwiZXJyIiwiY29ubmVjdFdhbGxldCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/XContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_XContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/XContext */ \"./context/XContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_XContext__WEBPACK_IMPORTED_MODULE_2__.XProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\A-JO3L\\\\Desktop\\\\iJo3l\\\\Xtelpt\\\\xtelpt-web3\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\A-JO3L\\\\Desktop\\\\iJo3l\\\\Xtelpt\\\\xtelpt-web3\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ2lCO0FBRS9DLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUFPLDhEQUFDSCx3REFBUztrQkFDZiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNsQjtBQUNkLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3gtdGVwbHQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCB7IFhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvWENvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPFhQcm92aWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L1hQcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIlhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();