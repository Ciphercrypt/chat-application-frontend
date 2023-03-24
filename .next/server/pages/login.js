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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/components/auth/login.tsx":
/*!***************************************!*\
  !*** ./src/components/auth/login.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginScreen)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Avatar */ \"@mui/material/Avatar\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/TextField */ \"@mui/material/TextField\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/FormControlLabel */ \"@mui/material/FormControlLabel\");\n/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Checkbox */ \"@mui/material/Checkbox\");\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ \"@mui/material/Link\");\n/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/LockOutlined */ \"@mui/icons-material/LockOutlined\");\n/* harmony import */ var _mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_16__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_15__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\nconst jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\n\n\n\n\n\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.createTheme)();\nfunction LoginScreen({ isLoggedIn , setIsLoggedIn  }) {\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const data = new FormData(event.currentTarget);\n        console.log({\n            email: data.get(\"email\"),\n            password: data.get(\"password\")\n        });\n        const formData = new FormData();\n        formData.append(\"email\", data.get(\"email\"));\n        formData.append(\"password\", data.get(\"password\"));\n        try {\n            const response = await fetch(\"http://localhost:8080/api/login\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (!response.ok) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.error(\"Failed to login\");\n                console.error(\"Failed to login\");\n                return;\n            }\n            console.log(\"Logged in successfully\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast.success(\"Logged in successfully\");\n            // const { token } = await response.json();\n            // const decodedToken = jwt.decode(token);\n            // console.log(decodedToken.sub);\n            const token = await response.text();\n            sessionStorage.setItem(\"userEmail\", data.get(\"email\"));\n            sessionStorage.setItem(\"token\", token);\n            setIsLoggedIn(true);\n        //redirect to /home\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_14__.ThemeProvider, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_15__.ToastContainer, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default()), {\n                component: \"main\",\n                maxWidth: \"xs\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        sx: {\n                            marginTop: 8,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                sx: {\n                                    m: 1,\n                                    bgcolor: \"secondary.main\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_LockOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12___default()), {\n                                component: \"h1\",\n                                variant: \"h5\",\n                                children: \"Sign in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_10___default()), {\n                                component: \"form\",\n                                onSubmit: handleSubmit,\n                                noValidate: true,\n                                sx: {\n                                    mt: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        id: \"email\",\n                                        label: \"Email Address\",\n                                        name: \"email\",\n                                        autoComplete: \"email\",\n                                        autoFocus: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        margin: \"normal\",\n                                        required: true,\n                                        fullWidth: true,\n                                        name: \"password\",\n                                        label: \"Password\",\n                                        type: \"password\",\n                                        id: \"password\",\n                                        autoComplete: \"current-password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_7___default()), {\n                                            value: \"remember\",\n                                            color: \"primary\"\n                                        }, void 0, false, void 0, void 0),\n                                        label: \"Remember me\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        type: \"submit\",\n                                        fullWidth: true,\n                                        variant: \"contained\",\n                                        sx: {\n                                            mt: 3,\n                                            mb: 2\n                                        },\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                        container: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                            item: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                                href: \"/register\",\n                                                variant: \"body2\",\n                                                children: \"Don't have an account? Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                                lineNumber: 137,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\components\\\\auth\\\\login.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVE4sT0FBTyxFQUFDLFdBQVc7d0NBQ25CUCxFQUFFLEVBQUU7NENBQUVVLEVBQUUsRUFBRSxDQUFDOzRDQUFFYSxFQUFFLEVBQUUsQ0FBQzt5Q0FBRTtrREFDckIsU0FFRDs7Ozs7NENBQVM7a0RBQ1QsOERBQUNoRSwyREFBSTt3Q0FBQ2lFLFNBQVM7a0RBRWIsNEVBQUNqRSwyREFBSTs0Q0FBQ2tFLElBQUk7c0RBQ1IsNEVBQUNuRSwyREFBSTtnREFBQ29FLElBQUksRUFBQyxXQUFXO2dEQUFDbkIsT0FBTyxFQUFDLE9BQU87MERBQ25DLGdDQUFnQzs7Ozs7b0RBQzVCOzs7OztnREFDRjs7Ozs7NENBQ0Y7Ozs7OztvQ0FDSDs7Ozs7OzRCQUNGOzs7Ozs7b0JBRUk7Ozs7OztZQUNFLENBQ2hCO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0LWFwcGxpY2F0aW9uLWZyb250ZW5kLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9sb2dpbi50c3g/Nzc0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BdmF0YXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuY29uc3Qgand0ID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTtcclxuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgY3JlYXRlVGhlbWUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuXHJcblxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblNjcmVlbih7aXNMb2dnZWRJbixzZXRJc0xvZ2dlZElufSkge1xyXG5cclxuXHJcblxyXG5cclxuICBcclxuICBcclxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG5cclxuIFxyXG4gIFxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIFxyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgY29uc29sZS5sb2coe1xyXG4gICAgZW1haWw6IGRhdGEuZ2V0KCdlbWFpbCcpLFxyXG4gICAgcGFzc3dvcmQ6IGRhdGEuZ2V0KCdwYXNzd29yZCcpLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBmb3JtRGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBkYXRhLmdldCgnZW1haWwnKSBhcyBzdHJpbmcpO1xyXG4gIGZvcm1EYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIGRhdGEuZ2V0KCdwYXNzd29yZCcpIGFzIHN0cmluZyk7XHJcblxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9sb2dpbicsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkZhaWxlZCB0byBsb2dpblwiKTtcclxuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvZ2luJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGluIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgdG9hc3Quc3VjY2VzcyhcIkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICAvLyBjb25zdCB7IHRva2VuIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbi5zdWIpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlckVtYWlsXCIsIGRhdGEuZ2V0KCdlbWFpbCcpIGFzIHN0cmluZyk7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG5cclxuICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICBcclxuICAgIC8vcmVkaXJlY3QgdG8gL2hvbWVcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiA4LFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEF2YXRhciBzeD17eyBtOiAxLCBiZ2NvbG9yOiAnc2Vjb25kYXJ5Lm1haW4nIH19PlxyXG4gICAgICAgICAgICA8TG9ja091dGxpbmVkSWNvbiAvPlxyXG4gICAgICAgICAgPC9BdmF0YXI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoNVwiPlxyXG4gICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Qm94IGNvbXBvbmVudD1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBub1ZhbGlkYXRlIHN4PXt7IG10OiAxIH19PlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgIGNvbnRyb2w9ezxDaGVja2JveCB2YWx1ZT1cInJlbWVtYmVyXCIgY29sb3I9XCJwcmltYXJ5XCIgLz59XHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZW1lbWJlciBtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBzeD17eyBtdDogMywgbWI6IDIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIHZhcmlhbnQ9XCJib2R5MlwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gVXBcIn1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgXHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJCdXR0b24iLCJDc3NCYXNlbGluZSIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsIkxpbmsiLCJHcmlkIiwiQm94Iiwiand0IiwicmVxdWlyZSIsIkxvY2tPdXRsaW5lZEljb24iLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJ0b2FzdCIsInRoZW1lIiwiTG9naW5TY3JlZW4iLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwiZ2V0IiwicGFzc3dvcmQiLCJmb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJlcnJvciIsInN1Y2Nlc3MiLCJ0b2tlbiIsInRleHQiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJjb21wb25lbnQiLCJtYXhXaWR0aCIsInN4IiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibSIsImJnY29sb3IiLCJ2YXJpYW50Iiwib25TdWJtaXQiLCJub1ZhbGlkYXRlIiwibXQiLCJtYXJnaW4iLCJyZXF1aXJlZCIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWwiLCJuYW1lIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwidHlwZSIsImNvbnRyb2wiLCJ2YWx1ZSIsImNvbG9yIiwibWIiLCJjb250YWluZXIiLCJpdGVtIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/auth/login.tsx\n");

/***/ }),

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/login */ \"./src/components/auth/login.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_auth_login__WEBPACK_IMPORTED_MODULE_2__]);\n_components_auth_login__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Login() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { 0: isLoggedIn , 1: setIsLoggedIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userAuthorized().then((auth)=>{\n            if (auth) {\n                setIsLoggedIn(true);\n                router.push(\"/home\");\n            }\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            isLoggedIn: isLoggedIn,\n            setIsLoggedIn: setIsLoggedIn\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\ncicada\\\\chat-application-frontend\\\\src\\\\pages\\\\login.tsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n};\nasync function userAuthorized() {\n    const token = sessionStorage.getItem(\"token\");\n    if (!token) return false;\n    const response = await fetch(\"http://localhost:8080/api/ping\", {\n        method: \"get\",\n        headers: {\n            Authorization: \"Bearer \" + token\n        }\n    });\n    if (response.ok) {\n        return true;\n    }\n    return false;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBd0Q7QUFDTDtBQUNYO0FBSXpCLFNBQVNJLEtBQUssR0FBRztJQUM1QixNQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFFMUIsTUFBTSxLQUFDRyxVQUFVLE1BQUVDLGFBQWEsTUFBSU4sK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkRELGdEQUFTLENBQUMsSUFBSztRQUNYUSxjQUFjLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBSztZQUM1QixJQUFHQSxJQUFJLEVBQUU7Z0JBQ0xILGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CRixNQUFNLENBQUNNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN4QjtTQUNKLENBQUM7S0FDTCxDQUFDO0lBQ0YscUJBQ0k7a0JBQ0ksNEVBQUNULDhEQUFXO1lBQUNJLFVBQVUsRUFBRUEsVUFBVTtZQUFFQyxhQUFhLEVBQUVBLGFBQWE7Ozs7O2dCQUFJO3FCQUN0RSxDQUNMO0NBQ0w7QUFDRCxlQUFlQyxjQUFjLEdBQUc7SUFDNUIsTUFBTUksS0FBSyxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDN0MsSUFBSSxDQUFDRixLQUFLLEVBQUUsT0FBTyxLQUFLLENBQUM7SUFDekIsTUFBTUcsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDeEIsZ0NBQWdDLEVBQ2hDO1FBQ0lDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE9BQU8sRUFBRTtZQUNMQyxhQUFhLEVBQUUsU0FBUyxHQUFHUCxLQUFLO1NBQ25DO0tBQ0osQ0FDSjtJQUNELElBQUlHLFFBQVEsQ0FBQ0ssRUFBRSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0NBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHBsaWNhdGlvbi1mcm9udGVuZC8uL3NyYy9wYWdlcy9sb2dpbi50c3g/MTFlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpblNjcmVlbiBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0cnVlQ29sb3IgfSBmcm9tIFwiQGNsb3VkaW5hcnkvdXJsLWdlbi9xdWFsaWZpZXJzL2NvbG9yU3BhY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICB1c2VyQXV0aG9yaXplZCgpLnRoZW4oKGF1dGgpID0+IHtcclxuICAgICAgICAgICAgaWYoYXV0aCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TG9naW5TY3JlZW4gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gc2V0SXNMb2dnZWRJbj17c2V0SXNMb2dnZWRJbn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gdXNlckF1dGhvcml6ZWQoKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3BpbmcnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpblNjcmVlbiIsInVzZVJvdXRlciIsIkxvZ2luIiwicm91dGVyIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VyQXV0aG9yaXplZCIsInRoZW4iLCJhdXRoIiwicHVzaCIsInRva2VuIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwib2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "@mui/icons-material/LockOutlined":
/*!***************************************************!*\
  !*** external "@mui/icons-material/LockOutlined" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/LockOutlined");

/***/ }),

/***/ "@mui/material/Avatar":
/*!***************************************!*\
  !*** external "@mui/material/Avatar" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Checkbox":
/*!*****************************************!*\
  !*** external "@mui/material/Checkbox" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/FormControlLabel":
/*!*************************************************!*\
  !*** external "@mui/material/FormControlLabel" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Link":
/*!*************************************!*\
  !*** external "@mui/material/Link" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ "@mui/material/TextField":
/*!******************************************!*\
  !*** external "@mui/material/TextField" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

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

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();