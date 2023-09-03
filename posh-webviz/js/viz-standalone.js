/*!
Viz.js 3.1.0
Copyright (c) 2023 Michael Daines

This distribution contains other software in object code form:
Graphviz https://www.graphviz.org
Expat https://libexpat.github.io
*/
! function(A, I) {
    "object" == typeof exports && "undefined" != typeof module ? I(exports) : "function" == typeof define && define.amd ? define(["exports"], I) : I((A = "undefined" != typeof globalThis ? globalThis : A || self).Viz = {})
}(this, (function(A) {
    "use strict";
    var I = function() {
        return function(A) {
            var I;
            (A = A).ready = new Promise(((A, g) => {
                I = A
            }));
            var g = A => console.log(A),
                Q = A => console.error(A);

            function B(A) {
                throw A
            }
            A.agerrMessages = [], A.stderrMessages = [], Q = I => A.stderrMessages.push(I);
            var C, E, D, w, i, o, G, M, R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

            function F(A, I, g) {
                for (var Q = I + g, B = I; A[B] && !(B >= Q);) ++B;
                if (B - I > 16 && A.buffer && R) return R.decode(A.subarray(I, B));
                for (var C = ""; I < B;) {
                    var E = A[I++];
                    if (128 & E) {
                        var D = 63 & A[I++];
                        if (192 != (224 & E)) {
                            var w = 63 & A[I++];
                            if ((E = 224 == (240 & E) ? (15 & E) << 12 | D << 6 | w : (7 & E) << 18 | D << 12 | w << 6 | 63 & A[I++]) < 65536) C += String.fromCharCode(E);
                            else {
                                var i = E - 65536;
                                C += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                            }
                        } else C += String.fromCharCode((31 & E) << 6 | D)
                    } else C += String.fromCharCode(E)
                }
                return C
            }

            function y(A, I) {
                return A ? F(w, A, I) : ""
            }

            function K(A, I, g, Q) {
                if (!(Q > 0)) return 0;
                for (var B = g, C = g + Q - 1, E = 0; E < A.length; ++E) {
                    var D = A.charCodeAt(E);
                    if (D >= 55296 && D <= 57343) D = 65536 + ((1023 & D) << 10) | 1023 & A.charCodeAt(++E);
                    if (D <= 127) {
                        if (g >= C) break;
                        I[g++] = D
                    } else if (D <= 2047) {
                        if (g + 1 >= C) break;
                        I[g++] = 192 | D >> 6, I[g++] = 128 | 63 & D
                    } else if (D <= 65535) {
                        if (g + 2 >= C) break;
                        I[g++] = 224 | D >> 12, I[g++] = 128 | D >> 6 & 63, I[g++] = 128 | 63 & D
                    } else {
                        if (g + 3 >= C) break;
                        I[g++] = 240 | D >> 18, I[g++] = 128 | D >> 12 & 63, I[g++] = 128 | D >> 6 & 63, I[g++] = 128 | 63 & D
                    }
                }
                return I[g] = 0, g - B
            }

            function h(A, I, g) {
                return K(A, w, I, g)
            }

            function N(A) {
                for (var I = 0, g = 0; g < A.length; ++g) {
                    var Q = A.charCodeAt(g);
                    Q <= 127 ? I++ : Q <= 2047 ? I += 2 : Q >= 55296 && Q <= 57343 ? (I += 4, ++g) : I += 3
                }
                return I
            }

            function s() {
                var A = M.buffer;
                C = new Int8Array(A), E = new Int16Array(A), D = new Int32Array(A), w = new Uint8Array(A), i = new Uint32Array(A), o = new Float32Array(A), G = new Float64Array(A)
            }

            function k(A) {
                this.excPtr = A, this.ptr = A - 24, this.set_type = function(A) {
                    i[this.ptr + 4 >> 2] = A
                }, this.get_type = function() {
                    return i[this.ptr + 4 >> 2]
                }, this.set_destructor = function(A) {
                    i[this.ptr + 8 >> 2] = A
                }, this.get_destructor = function() {
                    return i[this.ptr + 8 >> 2]
                }, this.set_refcount = function(A) {
                    D[this.ptr >> 2] = A
                }, this.set_caught = function(A) {
                    A = A ? 1 : 0, C[this.ptr + 12 >> 0] = A
                }, this.get_caught = function() {
                    return 0 != C[this.ptr + 12 >> 0]
                }, this.set_rethrown = function(A) {
                    A = A ? 1 : 0, C[this.ptr + 13 >> 0] = A
                }, this.get_rethrown = function() {
                    return 0 != C[this.ptr + 13 >> 0]
                }, this.init = function(A, I) {
                    this.set_adjusted_ptr(0), this.set_type(A), this.set_destructor(I), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                }, this.add_ref = function() {
                    var A = D[this.ptr >> 2];
                    D[this.ptr >> 2] = A + 1
                }, this.release_ref = function() {
                    var A = D[this.ptr >> 2];
                    return D[this.ptr >> 2] = A - 1, 1 === A
                }, this.set_adjusted_ptr = function(A) {
                    i[this.ptr + 16 >> 2] = A
                }, this.get_adjusted_ptr = function() {
                    return i[this.ptr + 16 >> 2]
                }, this.get_exception_ptr = function() {
                    if (x(this.get_type())) return i[this.excPtr >> 2];
                    var A = this.get_adjusted_ptr();
                    return 0 !== A ? A : this.excPtr
                }
            }

            function L(A) {
                var I = M.buffer;
                try {
                    return M.grow(A - I.byteLength + 65535 >>> 16), s(), 1
                } catch (A) {}
            }
            var U = {};

            function S() {
                if (!S.strings) {
                    var A = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: "./this.program"
                    };
                    for (var I in U) void 0 === U[I] ? delete A[I] : A[I] = U[I];
                    var g = [];
                    for (var I in A) g.push(I + "=" + A[I]);
                    S.strings = g
                }
                return S.strings
            }
            var J = [null, [],
                []
            ];

            function Y(A) {
                return A % 4 == 0 && (A % 100 != 0 || A % 400 == 0)
            }
            var c = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                a = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function H(A, I) {
                C.set(A, I)
            }

            function Z(A, I, g, Q) {
                var B = D[Q + 40 >> 2],
                    C = {
                        tm_sec: D[Q >> 2],
                        tm_min: D[Q + 4 >> 2],
                        tm_hour: D[Q + 8 >> 2],
                        tm_mday: D[Q + 12 >> 2],
                        tm_mon: D[Q + 16 >> 2],
                        tm_year: D[Q + 20 >> 2],
                        tm_wday: D[Q + 24 >> 2],
                        tm_yday: D[Q + 28 >> 2],
                        tm_isdst: D[Q + 32 >> 2],
                        tm_gmtoff: D[Q + 36 >> 2],
                        tm_zone: B ? y(B) : ""
                    },
                    E = y(g),
                    w = {
                        "%c": "%a %b %d %H:%M:%S %Y",
                        "%D": "%m/%d/%y",
                        "%F": "%Y-%m-%d",
                        "%h": "%b",
                        "%r": "%I:%M:%S %p",
                        "%R": "%H:%M",
                        "%T": "%H:%M:%S",
                        "%x": "%m/%d/%y",
                        "%X": "%H:%M:%S",
                        "%Ec": "%c",
                        "%EC": "%C",
                        "%Ex": "%m/%d/%y",
                        "%EX": "%H:%M:%S",
                        "%Ey": "%y",
                        "%EY": "%Y",
                        "%Od": "%d",
                        "%Oe": "%e",
                        "%OH": "%H",
                        "%OI": "%I",
                        "%Om": "%m",
                        "%OM": "%M",
                        "%OS": "%S",
                        "%Ou": "%u",
                        "%OU": "%U",
                        "%OV": "%V",
                        "%Ow": "%w",
                        "%OW": "%W",
                        "%Oy": "%y"
                    };
                for (var i in w) E = E.replace(new RegExp(i, "g"), w[i]);
                var o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    G = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                function M(A, I, g) {
                    for (var Q = "number" == typeof A ? A.toString() : A || ""; Q.length < I;) Q = g[0] + Q;
                    return Q
                }

                function R(A, I) {
                    return M(A, I, "0")
                }

                function F(A, I) {
                    function g(A) {
                        return A < 0 ? -1 : A > 0 ? 1 : 0
                    }
                    var Q;
                    return 0 === (Q = g(A.getFullYear() - I.getFullYear())) && 0 === (Q = g(A.getMonth() - I.getMonth())) && (Q = g(A.getDate() - I.getDate())), Q
                }

                function h(A) {
                    switch (A.getDay()) {
                        case 0:
                            return new Date(A.getFullYear() - 1, 11, 29);
                        case 1:
                            return A;
                        case 2:
                            return new Date(A.getFullYear(), 0, 3);
                        case 3:
                            return new Date(A.getFullYear(), 0, 2);
                        case 4:
                            return new Date(A.getFullYear(), 0, 1);
                        case 5:
                            return new Date(A.getFullYear() - 1, 11, 31);
                        case 6:
                            return new Date(A.getFullYear() - 1, 11, 30)
                    }
                }

                function s(A) {
                    var I = function(A, I) {
                            for (var g = new Date(A.getTime()); I > 0;) {
                                var Q = Y(g.getFullYear()),
                                    B = g.getMonth(),
                                    C = (Q ? c : a)[B];
                                if (!(I > C - g.getDate())) return g.setDate(g.getDate() + I), g;
                                I -= C - g.getDate() + 1, g.setDate(1), B < 11 ? g.setMonth(B + 1) : (g.setMonth(0), g.setFullYear(g.getFullYear() + 1))
                            }
                            return g
                        }(new Date(A.tm_year + 1900, 0, 1), A.tm_yday),
                        g = new Date(I.getFullYear(), 0, 4),
                        Q = new Date(I.getFullYear() + 1, 0, 4),
                        B = h(g),
                        C = h(Q);
                    return F(B, I) <= 0 ? F(C, I) <= 0 ? I.getFullYear() + 1 : I.getFullYear() : I.getFullYear() - 1
                }
                var k = {
                    "%a": function(A) {
                        return o[A.tm_wday].substring(0, 3)
                    },
                    "%A": function(A) {
                        return o[A.tm_wday]
                    },
                    "%b": function(A) {
                        return G[A.tm_mon].substring(0, 3)
                    },
                    "%B": function(A) {
                        return G[A.tm_mon]
                    },
                    "%C": function(A) {
                        return R((A.tm_year + 1900) / 100 | 0, 2)
                    },
                    "%d": function(A) {
                        return R(A.tm_mday, 2)
                    },
                    "%e": function(A) {
                        return M(A.tm_mday, 2, " ")
                    },
                    "%g": function(A) {
                        return s(A).toString().substring(2)
                    },
                    "%G": function(A) {
                        return s(A)
                    },
                    "%H": function(A) {
                        return R(A.tm_hour, 2)
                    },
                    "%I": function(A) {
                        var I = A.tm_hour;
                        return 0 == I ? I = 12 : I > 12 && (I -= 12), R(I, 2)
                    },
                    "%j": function(A) {
                        return R(A.tm_mday + function(A, I) {
                            for (var g = 0, Q = 0; Q <= I; g += A[Q++]);
                            return g
                        }(Y(A.tm_year + 1900) ? c : a, A.tm_mon - 1), 3)
                    },
                    "%m": function(A) {
                        return R(A.tm_mon + 1, 2)
                    },
                    "%M": function(A) {
                        return R(A.tm_min, 2)
                    },
                    "%n": function() {
                        return "\n"
                    },
                    "%p": function(A) {
                        return A.tm_hour >= 0 && A.tm_hour < 12 ? "AM" : "PM"
                    },
                    "%S": function(A) {
                        return R(A.tm_sec, 2)
                    },
                    "%t": function() {
                        return "\t"
                    },
                    "%u": function(A) {
                        return A.tm_wday || 7
                    },
                    "%U": function(A) {
                        var I = A.tm_yday + 7 - A.tm_wday;
                        return R(Math.floor(I / 7), 2)
                    },
                    "%V": function(A) {
                        var I = Math.floor((A.tm_yday + 7 - (A.tm_wday + 6) % 7) / 7);
                        if ((A.tm_wday + 371 - A.tm_yday - 2) % 7 <= 2 && I++, I) {
                            if (53 == I) {
                                var g = (A.tm_wday + 371 - A.tm_yday) % 7;
                                4 == g || 3 == g && Y(A.tm_year) || (I = 1)
                            }
                        } else {
                            I = 52;
                            var Q = (A.tm_wday + 7 - A.tm_yday - 1) % 7;
                            (4 == Q || 5 == Q && Y(A.tm_year % 400 - 1)) && I++
                        }
                        return R(I, 2)
                    },
                    "%w": function(A) {
                        return A.tm_wday
                    },
                    "%W": function(A) {
                        var I = A.tm_yday + 7 - (A.tm_wday + 6) % 7;
                        return R(Math.floor(I / 7), 2)
                    },
                    "%y": function(A) {
                        return (A.tm_year + 1900).toString().substring(2)
                    },
                    "%Y": function(A) {
                        return A.tm_year + 1900
                    },
                    "%z": function(A) {
                        var I = A.tm_gmtoff,
                            g = I >= 0;
                        return I = (I = Math.abs(I) / 60) / 60 * 100 + I % 60, (g ? "+" : "-") + String("0000" + I).slice(-4)
                    },
                    "%Z": function(A) {
                        return A.tm_zone
                    },
                    "%%": function() {
                        return "%"
                    }
                };
                for (var i in E = E.replace(/%%/g, "\0\0"), k) E.includes(i) && (E = E.replace(new RegExp(i, "g"), k[i](C)));
                E = E.replace(/\0\0/g, "%");
                var L, U, S, J, Z, q, d = (L = E, U = !1, J = S > 0 ? S : N(L) + 1, Z = new Array(J), q = K(L, Z, 0, Z.length), U && (Z.length = q), Z);
                return d.length > I ? 0 : (H(d, A), d.length - 1)
            }
            var q = {
                a: function(A, I, g, Q) {
                    B("Assertion failed: " + y(A) + ", at: " + [I ? y(I) : "unknown filename", g, Q ? y(Q) : "unknown function"])
                },
                c: function(A, I, g) {
                    throw new k(A).init(I, g), A
                },
                l: function(A, I, g, Q) {},
                j: function(A, I, g) {
                    return 0
                },
                w: function(A, I) {},
                x: function(A, I, g) {
                    return 0
                },
                u: function(A, I, g, Q) {},
                e: function(A, I, g, Q) {},
                v: function(A, I) {},
                p: function(A, I, g) {},
                k: function() {
                    return true
                },
                q: function(A, I, g, Q, B, C, E) {
                    return -52
                },
                r: function(A, I, g, Q, B, C) {},
                b: function() {
                    B("")
                },
                f: function() {
                    return Date.now()
                },
                o: function(A) {
                    var I, g, Q = w.length,
                        B = 2147483648;
                    if ((A >>>= 0) > B) return !1;
                    for (var C = 1; C <= 4; C *= 2) {
                        var E = Q * (1 + .2 / C);
                        if (E = Math.min(E, A + 100663296), L(Math.min(B, (I = Math.max(A, E)) + ((g = 65536) - I % g) % g))) return !0
                    }
                    return !1
                },
                s: function(A, I) {
                    var g = 0;
                    return S().forEach((function(Q, B) {
                        var E = I + g;
                        i[A + 4 * B >> 2] = E,
                            function(A, I, g) {
                                for (var Q = 0; Q < A.length; ++Q) C[I++ >> 0] = A.charCodeAt(Q);
                                g || (C[I >> 0] = 0)
                            }(Q, E), g += Q.length + 1
                    })), 0
                },
                t: function(A, I) {
                    var g = S();
                    i[A >> 2] = g.length;
                    var Q = 0;
                    return g.forEach((function(A) {
                        Q += A.length + 1
                    })), i[I >> 2] = Q, 0
                },
                g: function(A) {
                    throw "exit(" + A + ")"
                },
                d: function(A) {
                    return 52
                },
                h: function(A, I, g, Q) {
                    return 52
                },
                m: function(A, I, g, Q, B) {
                    return 70
                },
                i: function(A, I, B, C) {
                    for (var E, D, o, G = 0, M = 0; M < B; M++) {
                        var R = i[I >> 2],
                            y = i[I + 4 >> 2];
                        I += 8;
                        for (var K = 0; K < y; K++) E = A, D = w[R + K], o = void 0, o = J[E], 0 === D || 10 === D ? ((1 === E ? g : Q)(F(o, 0)), o.length = 0) : o.push(D);
                        G += y
                    }
                    return i[C >> 2] = G, 0
                },
                n: function(A, I, g, Q, B) {
                    return Z(A, I, g, Q)
                },
                y: function(I) {
                    return A.agerrMessages.push(y(I)), 0
                }
            };
            A.UTF8ToString = y, A.stringToUTF8 = h, A.lengthBytesUTF8 = N, A.ccall = function(I, g, Q, B, C) {
                var E = {
                        string: A => {
                            var I = 0;
                            if (null != A && 0 !== A) {
                                var g = 1 + (A.length << 2);
                                h(A, I = b(g), g)
                            }
                            return I
                        },
                        array: A => {
                            var I = b(A.length);
                            return H(A, I), I
                        }
                    },
                    D = function(I) {
                        return A["_" + I]
                    }(I),
                    w = [],
                    i = 0;
                if (B)
                    for (var o = 0; o < B.length; o++) {
                        var G = E[Q[o]];
                        G ? (0 === i && (i = d()), w[o] = G(B[o])) : w[o] = B[o]
                    }
                var M = D.apply(null, w);
                return M = function(A) {
                    return 0 !== i && W(i),
                        function(A) {
                            return "string" === g ? y(A) : "boolean" === g ? Boolean(A) : A
                        }(A)
                }(M)
            }, A.getValue = function(A) {
                let I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i8";
                switch (I.endsWith("*") && (I = "*"), I) {
                    case "i1":
                    case "i8":
                        return C[A >> 0];
                    case "i16":
                        return E[A >> 1];
                    case "i32":
                    case "i64":
                        return D[A >> 2];
                    case "float":
                        return o[A >> 2];
                    case "double":
                        return G[A >> 3];
                    case "*":
                        return i[A >> 2];
                    default:
                        B("invalid type for getValue: " + I)
                }
            };
            var d, W, b, x, O = {
                a: q
            };
            return WebAssembly.instantiate(A.wasm, O).then((function(g) {
                var Q = g.instance.exports;
                A._viz_set_y_invert = Q.B, A._viz_get_graphviz_version = Q.C, A._viz_get_plugin_list = Q.D, A._viz_render_string = Q.E, A._free = Q.G, A._malloc = Q.H, d = Q.I, W = Q.J, b = Q.K, x = Q.L, Q.F, M = Q.z, s(),
                    function(A) {
                        A.A()
                    }(Q), I(A)
            })), A.ready
        }(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
    };
    const g = [
        [/^Error: (.*)/, "error"],
        [/^Warning: (.*)/, "warning"]
    ];

    function Q(A) {
        return function(A) {
            const I = [];
            let g;
            for (let Q = 0; Q < A.length; Q++) "Error" == A[Q] && ": " == A[Q + 1] ? (g = "error", Q += 1) : "Warning" == A[Q] && ": " == A[Q + 1] ? (g = "warning", Q += 1) : I.push({
                message: A[Q].trimEnd(),
                level: g
            });
            return I
        }(A.agerrMessages).concat(A.stderrMessages.map((A => {
            for (let I = 0; I < g.length; I++) {
                const [Q, B] = g[I];
                let C;
                if (null !== (C = Q.exec(A))) return {
                    message: C[1].trimEnd(),
                    level: B
                }
            }
            return {
                message: A.trimEnd()
            }
        })))
    }

    function B(A, I) {
        const g = A.ccall("viz_get_plugin_list", "number", ["string"], [I]);
        if (0 == g) throw new Error(`couldn't get plugin list: ${I}`);
        const Q = [];
        let B, C = g;
        for (; B = A.getValue(C, "*");) Q.push(A.UTF8ToString(B)), A.ccall("free", "number", ["number"], [B]), C += 4;
        return A.ccall("free", "number", ["number"], [g]), Q
    }
    class C {
        constructor(A) {
            this.module = A
        }
        get graphvizVersion() {
            return function(A) {
                const I = A.ccall("viz_get_graphviz_version", "number", [], []);
                return A.UTF8ToString(I)
            }(this.module)
        }
        get formats() {
            return B(this.module, "device")
        }
        get engines() {
            return B(this.module, "layout")
        }
        render(A) {
            let I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ("string" != typeof A) throw new Error("src must be a string");
            return function(A, I, g) {
                let B, C;
                try {
                    A.agerrMessages = [], A.stderrMessages = [];
                    const E = A.lengthBytesUTF8(I);
                    return B = A.ccall("malloc", "number", ["number"], [E + 1]), A.stringToUTF8(I, B, E + 1), A.ccall("viz_set_y_invert", "number", ["number"], [g.yInvert ? 1 : 0]), C = A.ccall("viz_render_string", "number", ["number", "string", "string"], [B, g.format, g.engine]), 0 === C ? {
                        status: "failure",
                        output: void 0,
                        errors: Q(A)
                    } : {
                        status: "success",
                        output: A.UTF8ToString(C),
                        errors: Q(A)
                    }
                } catch (I) {
                    if (/^exit\(\d+\)/.test(I)) return {
                        status: "failure",
                        output: void 0,
                        errors: Q(A)
                    };
                    throw I
                } finally {
                    B && A.ccall("free", "number", ["number"], [B]), C && A.ccall("free", "number", ["number"], [C])
                }
            }(this.module, A, {
                format: "dot",
                engine: "dot",
                ...I
            })
        }
        renderString(A) {
            let I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const g = this.render(A, I);
            if ("success" !== g.status) throw new Error(g.errors.find((A => "error" == A.level))?.message || "render failed");
            return g.output
        }
        renderSVGElement(A) {
            let I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const g = this.renderString(A, {
                ...I,
                format: "svg"
            });
            return (new DOMParser).parseFromString(g, "image/svg+xml").documentElement
        }
        renderJSON(A) {
            let I = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const g = this.renderString(A, {
                ...I,
                format: "json"
            });
            return JSON.parse(g)
        }
    }

    function D() {
        const A = atob(E),
            I = new Uint8Array(A.length);
        for (let g = 0; g < A.length; g++) I[g] = A.charCodeAt(g);
        return I.buffer
    }
    A.engines = ["circo", "dot", "fdp", "neato", "nop", "nop1", "nop2", "osage", "patchwork", "sfdp", "twopi"], A.formats = ["canon", "cmap", "cmapx", "cmapx_np", "dot", "dot_json", "eps", "fig", "gv", "imap", "imap_np", "ismap", "json", "json0", "mp", "pic", "plain", "plain-ext", "pov", "ps", "ps2", "svg", "tk", "xdot", "xdot1.2", "xdot1.4", "xdot_json"], A.graphvizVersion = "8.1.0", A.instance = function() {
        return I({
            wasm: D()
        }).then((A => new C(A)))
    }
}));