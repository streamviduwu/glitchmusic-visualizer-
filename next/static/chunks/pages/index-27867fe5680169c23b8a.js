_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        "/0+H": function(e, a, t) {
            "use strict";
            a.__esModule = !0, a.isInAmpMode = c, a.useAmp = function() {
                return c(n.default.useContext(i.AmpStateContext))
            };
            var s, n = (s = t("q1tI")) && s.__esModule ? s : {
                    default: s
                },
                i = t("lwAK");

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = e.ampFirst,
                    t = void 0 !== a && a,
                    s = e.hybrid,
                    n = void 0 !== s && s,
                    i = e.hasQuery,
                    c = void 0 !== i && i;
                return t || n && c
            }
        },
        "7W2i": function(e, a, t) {
            var s = t("SksO");
            e.exports = function(e, a) {
                if ("function" !== typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), a && s(e, a)
            }
        },
        "8Kt/": function(e, a, t) {
            "use strict";
            t("lSNA");
            a.__esModule = !0, a.defaultHead = l, a.default = void 0;
            var s, n = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var a = o();
                    if (a && a.has(e)) return a.get(e);
                    var t = {},
                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var i = s ? Object.getOwnPropertyDescriptor(e, n) : null;
                            i && (i.get || i.set) ? Object.defineProperty(t, n, i) : t[n] = e[n]
                        }
                    t.default = e, a && a.set(e, t);
                    return t
                }(t("q1tI")),
                i = (s = t("Xuae")) && s.__esModule ? s : {
                    default: s
                },
                c = t("lwAK"),
                r = t("FYa8"),
                j = t("/0+H");

            function o() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    a = [n.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || a.push(n.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), a
            }

            function u(e, a) {
                return "string" === typeof a || "number" === typeof a ? e : a.type === n.default.Fragment ? e.concat(n.default.Children.toArray(a.props.children).reduce((function(e, a) {
                    return "string" === typeof a || "number" === typeof a ? e : e.concat(a)
                }), [])) : e.concat(a)
            }
            var b = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(e, a) {
                return e.reduce((function(e, a) {
                    var t = n.default.Children.toArray(a.props.children);
                    return e.concat(t)
                }), []).reduce(u, []).reverse().concat(l(a.inAmpMode)).filter(function() {
                    var e = new Set,
                        a = new Set,
                        t = new Set,
                        s = {};
                    return function(n) {
                        var i = !0;
                        if (n.key && "number" !== typeof n.key && n.key.indexOf("$") > 0) {
                            var c = n.key.slice(n.key.indexOf("$") + 1);
                            e.has(c) ? i = !1 : e.add(c)
                        }
                        switch (n.type) {
                            case "title":
                            case "base":
                                a.has(n.type) ? i = !1 : a.add(n.type);
                                break;
                            case "meta":
                                for (var r = 0, j = b.length; r < j; r++) {
                                    var o = b[r];
                                    if (n.props.hasOwnProperty(o))
                                        if ("charSet" === o) t.has(o) ? i = !1 : t.add(o);
                                        else {
                                            var l = n.props[o],
                                                u = s[o] || new Set;
                                            u.has(l) ? i = !1 : (u.add(l), s[o] = u)
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(e, a) {
                    var t = e.key || a;
                    return n.default.cloneElement(e, {
                        key: t
                    })
                }))
            }

            function x(e) {
                var a = e.children,
                    t = (0, n.useContext)(c.AmpStateContext),
                    s = (0, n.useContext)(r.HeadManagerContext);
                return n.default.createElement(i.default, {
                    reduceComponentsToState: m,
                    headManager: s,
                    inAmpMode: (0, j.isInAmpMode)(t)
                }, a)
            }
            x.rewind = function() {};
            var O = x;
            a.default = O
        },
        Bnag: function(e, a) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        EbDI: function(e, a) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        FYa8: function(e, a, t) {
            "use strict";
            var s;
            a.__esModule = !0, a.HeadManagerContext = void 0;
            var n = ((s = t("q1tI")) && s.__esModule ? s : {
                default: s
            }).default.createContext({});
            a.HeadManagerContext = n
        },
        Ijbi: function(e, a, t) {
            var s = t("WkPL");
            e.exports = function(e) {
                if (Array.isArray(e)) return s(e)
            }
        },
        Nsbk: function(e, a) {
            function t(a) {
                return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, t(a)
            }
            e.exports = t
        },
        PJYZ: function(e, a) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        Qetd: function(e, a, t) {
            "use strict";
            var s = Object.assign.bind(Object);
            e.exports = s, e.exports.default = e.exports
        },
        RIqP: function(e, a, t) {
            var s = t("Ijbi"),
                n = t("EbDI"),
                i = t("ZhPi"),
                c = t("Bnag");
            e.exports = function(e) {
                return s(e) || n(e) || i(e) || c()
            }
        },
        RNiq: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, "default", (function() {
                return c
            }));
            var s = t("nKUr"),
                n = t("8Kt/"),
                i = t.n(n);

            function c() {
                return Object(s.jsxs)("div", {
                    className: "container",
                    children: [Object(s.jsxs)(i.a, {
                        children: [Object(s.jsx)("meta", {
                            charSet: "UTF-8"
                        }), Object(s.jsx)("title", {
                            children: "Undertale Tribute"
                        }), Object(s.jsx)("script", {
                            src: "/all.min.js"
                        })]
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("i", {
                        className: "rain"
                    }), Object(s.jsx)("canvas", {
                        id: "mycanvas"
                    }), Object(s.jsx)("button", {
                        id: "play-btn",
                        children: Object(s.jsx)("i", {
                            className: "fas fa-play"
                        })
                    }), Object(s.jsx)("audio", {
                        id: "audioElement",
                        src: "music.mp3"
                    }), Object(s.jsx)("audio", {
                        id: "rain",
                        src: "rain2.mp3"
                    }), Object(s.jsx)("script", {
                        src: "script.js"
                    })]
                })
            }
        },
        SksO: function(e, a) {
            function t(a, s) {
                return e.exports = t = Object.setPrototypeOf || function(e, a) {
                    return e.__proto__ = a, e
                }, t(a, s)
            }
            e.exports = t
        },
        W8MJ: function(e, a) {
            function t(e, a) {
                for (var t = 0; t < a.length; t++) {
                    var s = a[t];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }
            e.exports = function(e, a, s) {
                return a && t(e.prototype, a), s && t(e, s), e
            }
        },
        WkPL: function(e, a) {
            e.exports = function(e, a) {
                (null == a || a > e.length) && (a = e.length);
                for (var t = 0, s = new Array(a); t < a; t++) s[t] = e[t];
                return s
            }
        },
        Xuae: function(e, a, t) {
            "use strict";
            var s = t("RIqP"),
                n = t("lwsE"),
                i = t("W8MJ"),
                c = (t("PJYZ"), t("7W2i")),
                r = t("a1gu"),
                j = t("Nsbk");

            function o(e) {
                var a = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, s = j(e);
                    if (a) {
                        var n = j(this).constructor;
                        t = Reflect.construct(s, arguments, n)
                    } else t = s.apply(this, arguments);
                    return r(this, t)
                }
            }
            a.__esModule = !0, a.default = void 0;
            var l = t("q1tI"),
                u = function(e) {
                    c(t, e);
                    var a = o(t);

                    function t(e) {
                        var i;
                        return n(this, t), (i = a.call(this, e))._hasHeadManager = void 0, i.emitChange = function() {
                            i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(s(i.props.headManager.mountedInstances), i.props))
                        }, i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances, i
                    }
                    return i(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), t
                }(l.Component);
            a.default = u
        },
        ZhPi: function(e, a, t) {
            var s = t("WkPL");
            e.exports = function(e, a) {
                if (e) {
                    if ("string" === typeof e) return s(e, a);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, a) : void 0
                }
            }
        },
        a1gu: function(e, a, t) {
            var s = t("cDf5"),
                n = t("PJYZ");
            e.exports = function(e, a) {
                return !a || "object" !== s(a) && "function" !== typeof a ? n(e) : a
            }
        },
        cDf5: function(e, a) {
            function t(a) {
                return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? e.exports = t = function(e) {
                    return typeof e
                } : e.exports = t = function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, t(a)
            }
            e.exports = t
        },
        lSNA: function(e, a) {
            e.exports = function(e, a, t) {
                return a in e ? Object.defineProperty(e, a, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[a] = t, e
            }
        },
        lwAK: function(e, a, t) {
            "use strict";
            var s;
            a.__esModule = !0, a.AmpStateContext = void 0;
            var n = ((s = t("q1tI")) && s.__esModule ? s : {
                default: s
            }).default.createContext({});
            a.AmpStateContext = n
        },
        lwsE: function(e, a) {
            e.exports = function(e, a) {
                if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
            }
        },
        vlRD: function(e, a, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t("RNiq")
            }])
        }
    },
    [
        ["vlRD", 0, 1]
    ]
]);