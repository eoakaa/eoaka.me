(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [289],
  {
    530: function (e, a, c) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[user]",
        function () {
          return c(8370);
        },
      ]);
    },
    8370: function (e, a, c) {
      "use strict";
      c.r(a),
        c.d(a, {
          __N_SSP: function () {
            return v;
          },
          default: function () {
            return w;
          },
        });
      var t = c(5893),
        o = c(7294),
        n = c(9008),
        i = c.n(n),
        r = c(4449),
        s = c.n(r),
        l = c(5430),
        d = c.n(l),
        m = c(4593),
        h = c(246),
        g = c(1163),
        p = c(4298),
        f = c.n(p),
        _ = c(1664),
        u = c.n(_),
        x = c(5459),
        b = c.n(x),
        v = !0;
      function w(e) {
        let a = (0, g.useRouter)();
        (0, o.useEffect)(() => {
          if (
            (void 0 !== e.data.username || void 0 !== e.data.config) &&
            void 0 === e.data.ban &&
            !0 === e.data.verified &&
            "User not found" !== e.data.error
          ) {
            if (
              ("" !== e.data.alias &&
                e.data.alias.toLowerCase() !== e.data.username.toLowerCase() &&
                a.query.user.toLowerCase() !== e.data.username.toLowerCase() &&
                a.push("/".concat(e.data.username.toLowerCase())),
              !0 === e.data.config.animated_title)
            ) {
              let a = 0,
                c = e.data.config.display_name,
                t = !0;
              setInterval(function () {
                a == c.length && (t = !1),
                  0 == a && (t = !0),
                  (a = 1 == t ? ++a : --a);
                let e = 0 == a ? "" : c.slice(0, a);
                document.title = "@" + e;
              }, 380);
            }
            fetch("/api/view/".concat(a.query.user), {
              headers: {
                verify_user: "oQ0xoT_".concat(a.query.user),
                "Accept-Language": "?0; Mobile",
              },
            });
          }
        }, []);
        let c = {
            youtube: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().youtube, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "1.99 5 20.01 14.01",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6l5.207 3.005l-5.212 2.995z",
              }),
            }),
            discord: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().discord, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "1.96 4.26 20.03 15.53",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2z",
              }),
            }),
            spotify: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().spotify, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2.02 2.02 19.98 19.98",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991c0 5.494 4.496 9.99 9.991 9.99c5.494 0 9.99-4.496 9.99-9.99c0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201c-2.349-1.45-5.296-1.75-8.793-.951c-.348.102-.648-.148-.748-.449c-.101-.35.149-.648.45-.749c3.795-.85 7.093-.499 9.69 1.1c.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-.548 11.239 1.351c.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6a.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351c.449.249.599.849.349 1.298c-.25.35-.849.498-1.299.248z",
              }),
            }),
            instagram: (0, t.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().instagram, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "3 2.98 18.01 18.04",
              children: [
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M20.947 8.305a6.53 6.53 0 0 0-.419-2.216a4.61 4.61 0 0 0-2.633-2.633a6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42a4.607 4.607 0 0 0-2.633 2.633a6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419a4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187c.043-.962.056-1.267.056-3.71c-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078a1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z",
                }),
                (0, t.jsx)("circle", {
                  cx: "11.994",
                  cy: "11.979",
                  r: "3.003",
                  fill: "currentColor",
                }),
              ],
            }),
            x: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().x, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "26.8 48 460.2 416",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z",
              }),
            }),
            tiktok: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().tiktok, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "3.2 2 17.43 19.99",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74a2.89 2.89 0 0 1 2.31-4.64a2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
              }),
            }),
            telegram: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().telegram, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2 3.61 20.02 16.79",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z",
              }),
            }),
            soundcloud: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().soundcloud, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "1.99 7.64 20.02 8.72",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M2.971 12.188c-.041 0-.078.038-.083.082l-.194 1.797l.194 1.756c.005.049.042.082.083.082s.075-.033.084-.082l.211-1.756l-.225-1.797c0-.046-.037-.082-.074-.082m-.75.691c-.051 0-.076.03-.088.079l-.138 1.109l.138 1.092c0 .046.037.078.075.078c.039 0 .073-.038.087-.087l.176-1.1l-.176-1.112c0-.051-.037-.076-.075-.076m1.526-1.025c-.052 0-.1.039-.1.087l-.176 2.139l.188 2.051c0 .049.037.1.099.1c.052 0 .089-.051.102-.1l.211-2.064l-.211-2.126c-.013-.049-.052-.1-.102-.1m.79-.075c-.063 0-.114.051-.126.113l-.161 2.201l.177 2.123c.012.063.061.114.122.114c.064 0 .113-.051.125-.124l.201-2.113l-.201-2.187a.11.11 0 0 0-.111-.112l-.026-.015zm.962.301a.128.128 0 0 0-.133-.125a.134.134 0 0 0-.137.125l-.182 2.026l.169 2.138a.13.13 0 0 0 .132.131c.062 0 .123-.055.123-.132l.189-2.139l-.189-2.036l.028.012zm.674-1.426a.154.154 0 0 0-.148.15l-.176 3.3l.156 2.139c0 .077.066.137.15.137c.078 0 .145-.074.15-.15l.174-2.137l-.173-3.313c-.007-.088-.074-.152-.15-.152m.8-.762a.178.178 0 0 0-.17.163l-.15 4.063l.138 2.125c0 .1.075.174.163.174c.086 0 .161-.074.174-.174l.162-2.125l-.161-4.052c-.013-.1-.088-.175-.175-.175m.826-.372c-.102 0-.176.073-.188.173l-.139 4.4l.139 2.102c.012.1.086.188.188.188a.193.193 0 0 0 .187-.188l.163-2.102l-.164-4.4c0-.1-.087-.188-.188-.188m1.038.038a.196.196 0 0 0-.199-.199a.205.205 0 0 0-.201.199l-.125 4.538l.124 2.089c.015.111.101.199.214.199s.201-.088.201-.199l.136-2.089l-.136-4.55l-.014.012zm.625-.111c-.113 0-.213.1-.213.211l-.125 4.439l.125 2.063c0 .125.1.213.213.213a.221.221 0 0 0 .214-.224l.125-2.064l-.14-4.428c0-.122-.1-.225-.225-.225m.838.139a.236.236 0 0 0-.237.237l-.086 4.29l.113 2.063c0 .124.1.231.236.231c.125 0 .227-.1.237-.237l.101-2.038l-.112-4.265c-.01-.137-.113-.238-.237-.238m.988-.786a.27.27 0 0 0-.139-.037c-.05 0-.1.013-.137.037a.25.25 0 0 0-.125.214v.05l-.086 5.044l.096 2.043v.007c.006.05.024.112.06.15c.05.051.12.086.196.086a.28.28 0 0 0 .175-.074a.262.262 0 0 0 .076-.188l.013-.201l.097-1.838l-.113-5.075a.24.24 0 0 0-.111-.199l-.002-.019zm.837-.457a.155.155 0 0 0-.124-.052a.283.283 0 0 0-.174.052a.265.265 0 0 0-.1.201v.023l-.114 5.513l.063 1.014l.052.988a.274.274 0 0 0 .548-.012l.125-2.013l-.125-5.536a.273.273 0 0 0-.138-.231m7.452 3.15c-.336 0-.663.072-.949.193a4.34 4.34 0 0 0-5.902-3.651c-.188.075-.227.151-.238.301v7.812a.31.31 0 0 0 .275.29h6.827a2.428 2.428 0 0 0 2.45-2.438a2.457 2.457 0 0 0-2.45-2.463",
              }),
            }),
            paypal: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().paypal, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "4.36 2.99 15.27 18.02",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M19.554 9.488c.121.563.106 1.246-.04 2.051c-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166a.72.72 0 0 0-.239.427l-.041.189l-.553 3.479l-.021.151a.706.706 0 0 1-.247.426a.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15a.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689c.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685c.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211c1.172-.262 2.134-.744 2.886-1.449c.685-.637 1.203-1.462 1.56-2.473c.162-.47.277-.917.352-1.338c.006-.041.014-.066.025-.074c.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374c-.537 1.562-1.547 2.618-3.037 3.168c-.758.269-1.602.408-2.535.425c0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964c-.013.053-.298 1.83-.855 5.329c-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165a.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483a.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131c.428.084.801.194 1.123.321c.718.274 1.266.688 1.645 1.237c.379.552.568 1.207.568 1.972z",
              }),
            }),
            github: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().github, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2.05 2 19.95 19.46",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z",
                clipRule: "evenodd",
              }),
            }),
            roblox: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().roblox, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "0.16 0 23.68 24",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M5.164 0L.16 18.928L18.836 24L23.84 5.072Zm8.747 15.354l-5.219-1.417l1.399-5.29l5.22 1.418l-1.4 5.29z",
              }),
            }),
            cashapp: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().cashapp, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 23.99",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M23.59 3.475a5.1 5.1 0 0 0-3.05-3.05c-1.31-.42-2.5-.42-4.92-.42H8.36c-2.4 0-3.61 0-4.9.4a5.1 5.1 0 0 0-3.05 3.06C0 4.765 0 5.965 0 8.365v7.27c0 2.41 0 3.6.4 4.9a5.1 5.1 0 0 0 3.05 3.05c1.3.41 2.5.41 4.9.41h7.28c2.41 0 3.61 0 4.9-.4a5.1 5.1 0 0 0 3.06-3.06c.41-1.3.41-2.5.41-4.9v-7.25c0-2.41 0-3.61-.41-4.91zm-6.17 4.63l-.93.93a.5.5 0 0 1-.67.01a5 5 0 0 0-3.22-1.18c-.97 0-1.94.32-1.94 1.21c0 .9 1.04 1.2 2.24 1.65c2.1.7 3.84 1.58 3.84 3.64c0 2.24-1.74 3.78-4.58 3.95l-.26 1.2a.49.49 0 0 1-.48.39H9.63l-.09-.01a.5.5 0 0 1-.38-.59l.28-1.27a6.54 6.54 0 0 1-2.88-1.57v-.01a.48.48 0 0 1 0-.68l1-.97a.49.49 0 0 1 .67 0c.91.86 2.13 1.34 3.39 1.32c1.3 0 2.17-.55 2.17-1.42c0-.87-.88-1.1-2.54-1.72c-1.76-.63-3.43-1.52-3.43-3.6c0-2.42 2.01-3.6 4.39-3.71l.25-1.23a.48.48 0 0 1 .48-.38h1.78l.1.01c.26.06.43.31.37.57l-.27 1.37c.9.3 1.75.77 2.48 1.39l.02.02c.19.2.19.5 0 .68z",
              }),
            }),
            twitch: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().twitch, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "1.71 0 20.57 24",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z",
              }),
            }),
            reddit: (0, t.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().reddit, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2 2 20 20",
              children: [
                (0, t.jsx)("circle", {
                  cx: "9.67",
                  cy: "13",
                  r: "1.001",
                  fill: "currentColor",
                }),
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M14.09 15.391A3.28 3.28 0 0 1 12 16a3.271 3.271 0 0 1-2.081-.63a.27.27 0 0 0-.379.38c.71.535 1.582.809 2.471.77a3.811 3.811 0 0 0 2.469-.77v.04a.284.284 0 0 0 .006-.396a.28.28 0 0 0-.396-.003zm.209-3.351a1 1 0 0 0 0 2l-.008.039c.016.002.033 0 .051 0a1 1 0 0 0 .958-1.038a1 1 0 0 0-1.001-1.001z",
                }),
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M12 2C6.479 2 2 6.477 2 12c0 5.521 4.479 10 10 10s10-4.479 10-10c0-5.523-4.479-10-10-10zm5.859 11.33c.012.146.012.293 0 .439c0 2.24-2.609 4.062-5.83 4.062s-5.83-1.82-5.83-4.062a2.681 2.681 0 0 1 0-.439a1.46 1.46 0 0 1-.455-2.327a1.458 1.458 0 0 1 2.063-.063a7.145 7.145 0 0 1 3.899-1.23l.743-3.47v-.004A.313.313 0 0 1 12.82 6l2.449.49a1.001 1.001 0 1 1-.131.61L13 6.65l-.649 3.12a7.123 7.123 0 0 1 3.85 1.23a1.46 1.46 0 0 1 2.469 1c.01.563-.307 1.08-.811 1.33z",
                }),
              ],
            }),
            steam: (0, t.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().steam, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2 2 19.97 20",
              children: [
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M8.21 17.32L7 16.8a2.13 2.13 0 1 0 1.17-2.93l1.28.53a1.58 1.58 0 0 1-1.22 2.92z",
                }),
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M12 2a10 10 0 0 0-10 9.34l5.38 2.21a2.31 2.31 0 0 1 .47-.24A2.62 2.62 0 0 1 9 13.1l2.44-3.56a3.8 3.8 0 1 1 3.8 3.8h-.08l-3.51 2.5a2.77 2.77 0 0 1-5.47.68l-3.77-1.6A10 10 0 1 0 12 2z",
                }),
                (0, t.jsx)("path", {
                  fill: "currentColor",
                  d: "M17.79 9.5a2.53 2.53 0 1 0-2.53 2.5a2.54 2.54 0 0 0 2.53-2.5zm-4.42 0a1.9 1.9 0 1 1 1.9 1.91a1.9 1.9 0 0 1-1.9-1.92z",
                }),
              ],
            }),
            kick: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().kick, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "3 2 18 20",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M3 2h8v2h2V2h8v8h-2v4h2v8h-8v-2h-2v2H3V2Zm10 16h2v2h4v-4h-2v-2h-2v-4h2V8h2V4h-4v2h-2v2H9V4H5v16h4v-4h4v2Z",
              }),
            }),
            custom_url: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().custom, " ").concat(s().point),
              width: "1em",
              height: "1em",
              viewBox: "2 2 28 28",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M11 16c0-1.393.078-2.734.222-4h9.556c.144 1.266.222 2.607.222 4c0 1.393-.078 2.734-.222 4h-9.556A35.485 35.485 0 0 1 11 16Zm-1.79 4A37.618 37.618 0 0 1 9 16c0-1.379.073-2.72.21-4H2.58A14.002 14.002 0 0 0 2 16c0 1.39.203 2.733.58 4h6.63Zm-5.863 2h6.138c.314 1.86.771 3.547 1.344 4.978c.369.922.793 1.758 1.272 2.472A14.036 14.036 0 0 1 3.347 22Zm8.168 0h8.97c-.29 1.6-.69 3.032-1.17 4.235c-.516 1.288-1.104 2.262-1.706 2.9c-.6.634-1.144.865-1.609.865c-.465 0-1.009-.231-1.609-.866c-.602-.637-1.19-1.611-1.705-2.899c-.481-1.203-.881-2.636-1.171-4.235Zm11 0c-.314 1.86-.771 3.547-1.344 4.978c-.369.922-.793 1.758-1.272 2.472A14.036 14.036 0 0 0 28.653 22h-6.138Zm6.905-2c.377-1.267.58-2.61.58-4c0-1.39-.203-2.733-.58-4h-6.63c.137 1.28.21 2.621.21 4s-.073 2.72-.21 4h6.63ZM19.314 5.765c.481 1.203.881 2.636 1.171 4.235h-8.97c.29-1.6.69-3.032 1.17-4.235c.516-1.288 1.104-2.263 1.706-2.9c.598-.631 1.14-.863 1.604-.865h.008c.464 0 1.007.233 1.606.866c.602.636 1.19 1.611 1.705 2.899ZM22.515 10h6.138a14.036 14.036 0 0 0-8.754-7.45c.479.714.903 1.55 1.272 2.472c.573 1.431 1.03 3.118 1.344 4.978ZM3.347 10h6.138c.314-1.86.771-3.547 1.344-4.978c.369-.922.793-1.758 1.272-2.472A14.036 14.036 0 0 0 3.347 10Z",
              }),
            }),
          },
          n = {
            staff: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().staff),
              width: "1em",
              height: "1em",
              viewBox: "2.3 2 19.39 20",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m16.06 13.09l5.63 5.59l-3.32 3.28l-5.59-5.59v-.92l2.36-2.36h.92m.91-2.53L16 9.6l-4.79 4.8v1.97L5.58 22L2.3 18.68l5.59-5.59h1.97l.78-.78L6.8 8.46H5.5L2.69 5.62L5.31 3l2.8 2.8v1.31L12 10.95l2.66-2.66l-.96-1.01L15 5.97h-2.66l-.65-.65L15 2l.66.66v2.66L16.97 4l3.28 3.28c1.09 1.1 1.09 2.89 0 3.98l-1.97-2.01l-1.31 1.31Z",
              }),
            }),
            premium: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().premium),
              width: "1em",
              height: "1em",
              viewBox: "23 32 465 448",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z",
              }),
            }),
            verified: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().verified),
              width: "1em",
              height: "1em",
              viewBox: "1 1.5 22 21",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z",
              }),
            }),
            donor: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().donor),
              width: "1em",
              height: "1em",
              viewBox: "2.01 2.01 19.98 19.98",
              children: (0, t.jsx)("path", {
                d: "M2.047 14.668a.994.994 0 0 0 .465.607l1.91 1.104v2.199a1 1 0 0 0 1 1h2.199l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135L12 20.75l1.91 1.104a1.001 1.001 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1V16.38l1.91-1.104a1 1 0 0 0 .365-1.367L20.75 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1H16.38l-1.103-1.909a1.008 1.008 0 0 0-.607-.466a.993.993 0 0 0-.759.1L12 3.25l-1.909-1.104a1 1 0 0 0-1.366.365l-1.104 1.91H5.422a1 1 0 0 0-1 1V7.62l-1.91 1.104a1.003 1.003 0 0 0-.365 1.368L3.251 12l-1.104 1.908a1.009 1.009 0 0 0-.1.76zM12 13c-3.48 0-4-1.879-4-3c0-1.287 1.029-2.583 3-2.915V6.012h2v1.109c1.734.41 2.4 1.853 2.4 2.879h-1l-1 .018C13.386 9.638 13.185 9 12 9c-1.299 0-2 .515-2 1c0 .374 0 1 2 1c3.48 0 4 1.879 4 3c0 1.287-1.029 2.583-3 2.915V18h-2v-1.08c-2.339-.367-3-2.003-3-2.92h2c.011.143.159 1 2 1c1.38 0 2-.585 2-1c0-.325 0-1-2-1z",
                fill: "currentColor",
              }),
            }),
            og: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().og),
              width: "1em",
              height: "1em",
              viewBox: "2 2 20 19",
              children: (0, t.jsxs)("g", {
                fill: "currentColor",
                children: [
                  (0, t.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6Z",
                    clipRule: "evenodd",
                  }),
                  (0, t.jsx)("path", {
                    d: "M4.495 12.995L2.992 14.55c-.54.56-.81.839-.904 1.076c-.213.54-.03 1.138.433 1.422c.204.124.57.163 1.305.24c.414.044.622.066.795.133c.389.149.69.462.835.864c.064.18.085.394.127.823c.075.76.113 1.14.233 1.351c.274.48.853.669 1.374.448c.228-.096.498-.376 1.039-.935l2.482-2.57a8.508 8.508 0 0 1-6.216-4.408Zm8.795 4.408l2.482 2.57c.54.56.81.839 1.038.936c.521.22 1.1.031 1.374-.449c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.508 8.508 0 0 1-6.216 4.408Z",
                  }),
                ],
              }),
            }),
            booster: (0, t.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "".concat(s().server_booster),
              width: "1em",
              height: "1em",
              viewBox: "4.99 3 14 18",
              children: (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.58.58 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27Z",
              }),
            }),
          },
          r = (e) => {
            let a = document.getElementById(e),
              c = document.getElementById("mutebtn__Xa2qIQp");
            a.muted
              ? ((a.muted = !1),
                (c.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M13.51 6.303c-.255-1.466-1.932-2.065-3.083-1.25L7.94 6.817A1 1 0 0 1 7.363 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2.363a1 1 0 0 1 .578.184l2.486 1.762c1.15.816 2.828.217 3.083-1.25c.322-1.85.49-3.754.49-5.696c0-1.942-.168-3.845-.49-5.697Zm8.288 1.598a1 1 0 0 0-1.99.198a39.469 39.469 0 0 1 0 7.802a1 1 0 1 0 1.99.198a41.471 41.471 0 0 0 0-8.198Zm-3.925 1.017a1 1 0 1 0-1.993.164a35.506 35.506 0 0 1 0 5.836a1 1 0 0 0 1.993.164a37.465 37.465 0 0 0 0-6.164Z" clipRule="evenodd"></path></svg>'))
              : ((a.muted = !0),
                (c.innerHTML =
                  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M10.427 5.054c1.15-.816 2.828-.217 3.083 1.25c.322 1.85.49 3.754.49 5.696c0 1.942-.168 3.845-.49 5.697c-.255 1.466-1.932 2.065-3.083 1.25L7.94 17.183A1 1 0 0 0 7.363 17H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h2.363a1 1 0 0 0 .578-.184l2.486-1.762Zm7.28 4.239a1 1 0 0 0-1.414 1.414L17.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L19 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L20.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L19 10.586l-1.293-1.293Z" clipRule="evenodd"></path></svg>'));
          };
        return (0, t.jsxs)("div", {
          children: [
            (void 0 === e.data.username && void 0 === e.data.config) ||
            void 0 !== e.data.ban ||
            !0 !== e.data.verified ||
            "User not found" === e.data.error
              ? null
              : (0, t.jsxs)(i(), {
                  children: [
                    (0, t.jsx)("title", {
                      children: "@".concat(e.data.config.display_name),
                    }),
                    (0, t.jsx)("meta", {
                      name: "description",
                      content: "",
                    }),
                    (0, t.jsx)("meta", {
                      content: "website",
                      property: "og:type",
                    }),
                    (0, t.jsx)("meta", {
                      content: "@".concat(e.data.config.display_name),
                      property: "og:title",
                    }),
                    (0, t.jsx)("meta", {
                      content: e.data.config.description,
                      property: "og:description",
                    }),
                    (0, t.jsx)("meta", {
                      content: "@".concat(e.data.config.display_name),
                      name: "author",
                    }),
                    "firacode" === e.data.config.premium.font
                      ? (0, t.jsxs)(o.Fragment, {
                          children: [
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html:
                                  "body{font-family: 'Fira Code', monospace!important;}",
                              },
                            }),
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html: "\n\n#"
                                  .concat(
                                    s()["audio-control"],
                                    " {color: white;font-family: 'Fira Code', monospace;}."
                                  )
                                  .concat(
                                    s().tt,
                                    " {\n    font-family: 'Fira Code', monospace!important;;\n    font-weight: 580!important;}\n#"
                                  )
                                  .concat(
                                    s().tp,
                                    " {font-family: 'Fira Code', monospace;\n    font-weight:550!important;}\n."
                                  )
                                  .concat(
                                    s()["font-r"],
                                    " {    font-family: 'Fira Code', monospace!important;\n    font-weight:500;}"
                                  ),
                              },
                            }),
                          ],
                        })
                      : "array" === e.data.config.premium.font
                      ? (0, t.jsxs)(o.Fragment, {
                          children: [
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html:
                                  "body{font-family: 'Array', sans-serif!important;}",
                              },
                            }),
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html: "\n\n#"
                                  .concat(
                                    s()["audio-control"],
                                    " {font-family: 'Array', sans-serif;font-size: 33px!important}."
                                  )
                                  .concat(
                                    s().tt,
                                    " {\n    font-family: 'Array', sans-serif!important;;\n    font-weight: 200!important;}\n#"
                                  )
                                  .concat(
                                    s().tp,
                                    " {font-family: 'Array', sans-serif;\n    font-weight:550!important;}\n."
                                  )
                                  .concat(
                                    s()["font-r"],
                                    " {    font-family: 'Array', sans-serif!important;\n    font-weight:550;}"
                                  ),
                              },
                            }),
                          ],
                        })
                      : (0, t.jsxs)(o.Fragment, {
                          children: [
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html:
                                  "body{font-family: 'Satoshi', sans-serif;!important}",
                              },
                            }),
                            (0, t.jsx)("style", {
                              dangerouslySetInnerHTML: {
                                __html: "\n\n."
                                  .concat(
                                    s().under,
                                    "{font-weight: 650!important}#"
                                  )
                                  .concat(
                                    s()["audio-control"],
                                    " {font-family: 'Satoshi', sans-serif;font-weight: 700!important;}."
                                  )
                                  .concat(
                                    s().tt,
                                    " {\n    font-family: 'Satoshi', sans-serif;    font-weight: 580!important;}\n#"
                                  )
                                  .concat(
                                    s().tp,
                                    " {font-family: 'Satoshi', sans-serif;\n    font-weight:650!important;}\n."
                                  )
                                  .concat(
                                    s()["font-r"],
                                    " {   font-family: 'Satoshi', sans-serif!important;\n    font-weight:550;}"
                                  ),
                              },
                            }),
                          ],
                        }),
                    "" !== e.data.config.avatar
                      ? (0, t.jsx)("meta", {
                          content: e.data.config.avatar,
                          property: "og:image",
                        })
                      : (0, t.jsx)("meta", {
                          property: "og:image",
                          content:
                            "https://cdn.hris.rip/a_ddf3f6ef2cc298d589f90a44dbc0d3a1.gif",
                        }),
                    (0, t.jsx)("meta", {
                      content: e.data.config.color,
                      name: "theme-color",
                    }),
                    (0, t.jsx)("style", {
                      dangerouslySetInnerHTML: {
                        __html: "::-moz-selection {background: "
                          .concat(e.data.config.text_color, ";color: ")
                          .concat(
                            e.data.config.color,
                            ";}::selection {background: "
                          )
                          .concat(e.data.config.text_color, ";color: ")
                          .concat(e.data.config.color, ";}"),
                      },
                    }),
                    (0, t.jsx)("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "body {animation: ani ease 0.2s;animation-iteration-count: 1;animation-fill-mode: forwards;background-color: ".concat(
                            e.data.config.bg_color,
                            "!important;color: #ffffff;text-align: center;transition: 0.32s ease;overflow: hidden;margin:0;padding: 0;min-height: 100vh;height: 100%;}"
                          ),
                      },
                    }),
                    "" !== e.data.config.custom_cursor &&
                      (0, t.jsx)(o.Fragment, {
                        children: (0, t.jsx)("style", {
                          dangerouslySetInnerHTML: {
                            __html: "\n\n\n*    {cursor: url(".concat(
                              e.data.config.custom_cursor,
                              ") 16 16, auto !important;}"
                            ),
                          },
                        }),
                      }),
                    !0 === e.data.config.monochrome &&
                      (0, t.jsx)(o.Fragment, {
                        children: (0, t.jsx)("style", {
                          dangerouslySetInnerHTML: {
                            __html: "."
                              .concat(s().soundcloud, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().x, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().kick, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().reddit, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().twitch, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().cashapp, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().roblox, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().steam, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().discord, "{color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().tiktok, " {color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().github, "{color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().spotify, "{color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().instagram, "{color:")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter:drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().custom, "{color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().paypal, "{color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().telegram, " {color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().youtube, " {color: ")
                              .concat(
                                e.data.config.text_color,
                                "!important;filter: drop-shadow(1px 1px 5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}."
                              )
                              .concat(s().youtube, ":hover, .")
                              .concat(s().instagram, ":hover, .")
                              .concat(s().discord, ":hover, .")
                              .concat(s().github, ":hover, .")
                              .concat(s().spotify, ":hover, .")
                              .concat(s().custom, ":hover, .")
                              .concat(s().tiktok, ":hover, .")
                              .concat(s().paypal, ":hover, .")
                              .concat(s().telegram, ":hover, ")
                              .concat(s().steam, ":hover, ")
                              .concat(s().roblox, ":hover, ")
                              .concat(s().cashapp, ":hover, ")
                              .concat(s().twitch, ":hover, ")
                              .concat(s().reddit, ":hover, ")
                              .concat(s().kick, ":hover, ")
                              .concat(s().x, ":hover, ")
                              .concat(
                                s().soundcloud,
                                ":hover {filter: drop-shadow(1px 1px 3.5px "
                              )
                              .concat(
                                e.data.config.text_color,
                                ")!important;}"
                              ),
                          },
                        }),
                      }),
                    !0 === e.data.config.profile_gradient &&
                      (0, t.jsx)(o.Fragment, {
                        children: (0, t.jsx)("style", {
                          dangerouslySetInnerHTML: {
                            __html: "."
                              .concat(
                                s().container,
                                " {background:linear-gradient(25deg, "
                              )
                              .concat(e.data.config.gradient1_color, ", ")
                              .concat(
                                e.data.config.gradient2_color,
                                ")!important;}"
                              ),
                          },
                        }),
                      }),
                    !0 === e.data.config.transparent_bg
                      ? (0, t.jsx)(o.Fragment, {
                          children: (0, t.jsx)("style", {
                            dangerouslySetInnerHTML: {
                              __html: "."
                                .concat(
                                  s().container,
                                  "{backdrop-filter: blur(7.4px);-webkit-backdrop-filter: blur(7.4px);background-color: "
                                )
                                .concat(
                                  e.data.config.color_rgb,
                                  " !important;}"
                                ),
                            },
                          }),
                        })
                      : 0 === e.data.config.transparent_bg ||
                        1 === e.data.config.transparent_bg
                      ? (0, t.jsx)(o.Fragment, {
                          children: (0, t.jsx)("style", {
                            dangerouslySetInnerHTML: {
                              __html: "\n\n\n      \n\n\n."
                                .concat(s().container, "{background-color: ")
                                .concat(
                                  e.data.config.transparency_value,
                                  " !important;}"
                                ),
                            },
                          }),
                        })
                      : !0 !== e.data.config.transparent_bg &&
                        !1 !== e.data.config.transparent_bg
                      ? (0, t.jsx)(o.Fragment, {
                          children: (0, t.jsx)("style", {
                            dangerouslySetInnerHTML: {
                              __html: "."
                                .concat(
                                  s().container,
                                  "{backdrop-filter: blur(7.4px);-webkit-backdrop-filter: blur(7.4px);background-color: "
                                )
                                .concat(
                                  e.data.config.transparency_value,
                                  " !important;}"
                                ),
                            },
                          }),
                        })
                      : null,
                    !0 === e.data.config.premium.hide_views &&
                      (0, t.jsx)("style", {
                        dangerouslySetInnerHTML: {
                          __html: ".".concat(
                            s().container,
                            "{padding-bottom: 39px!important;}"
                          ),
                        },
                      }),
                    !0 === e.data.config.profile_gradient &&
                    !0 === e.data.config.volume_control
                      ? (0, t.jsx)("style", {
                          dangerouslySetInnerHTML: {
                            __html: "\n  ."
                              .concat(
                                s().mute_btn,
                                " {transition: 0.3s!important;background:linear-gradient(25deg, "
                              )
                              .concat(e.data.config.gradient1_btn, ", ")
                              .concat(e.data.config.gradient2_btn, ");color:")
                              .concat(e.data.config.button_txt, "; }  .")
                              .concat(
                                s().mute_btn,
                                ":hover {    background: linear-gradient(25deg, "
                              )
                              .concat(e.data.config.gradient1_color_hover, ", ")
                              .concat(
                                e.data.config.gradient2_color_hover,
                                ")!important; color: "
                              )
                              .concat(e.data.config.button_txt_hover, ";}"),
                          },
                        })
                      : !0 === e.data.config.volume_control
                      ? (0, t.jsx)(o.Fragment, {
                          children: (0, t.jsx)("style", {
                            dangerouslySetInnerHTML: {
                              __html: "\n  ."
                                .concat(
                                  s().mute_btn,
                                  " {transition: 0.3s!important;background-color:"
                                )
                                .concat(e.data.config.button_bg, ";color:")
                                .concat(e.data.config.button_txt, "; }  .")
                                .concat(
                                  s().mute_btn,
                                  ":hover {    background-color:"
                                )
                                .concat(
                                  e.data.config.button_bg_hover,
                                  "!important; color: "
                                )
                                .concat(e.data.config.button_txt_hover, ";}"),
                            },
                          }),
                        })
                      : null,
                  ],
                }),
            (void 0 === e.data.username && void 0 === e.data.config) ||
            void 0 !== e.data.ban ||
            !0 !== e.data.verified ||
            "User not found" === e.data.error
              ? void 0 !== e.data.ban
                ? (0, t.jsx)(o.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: d().inv,
                      children: [
                        (0, t.jsxs)("h1", {
                          children: [
                            "This user has been banned from ",
                            (0, t.jsx)("a", {
                              href: "/",
                              style: {
                                textDecoration: "none",
                                color: "#b252cc",
                              },
                              children: "",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("h3", {
                          children: ["Reason: ", e.data.ban_reason],
                        }),
                        (0, t.jsx)("a", {
                          href: "/",
                          className: d().lg_g,
                          children: "Home",
                        }),
                      ],
                    }),
                  })
                : !1 === e.data.verified
                ? (0, t.jsx)(o.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: d().inv,
                      children: [
                        (0, t.jsx)("h1", {
                          children: "This user is not verified yet.",
                        }),
                        (0, t.jsx)("h3", {
                          children:
                            "If that's your account, please check your email.",
                        }),
                        (0, t.jsx)("a", {
                          href: "/",
                          className: d().lg_g,
                          children: "Home",
                        }),
                      ],
                    }),
                  })
                : void 0 !== e.data.error && "User not found" === e.data.error
                ? (0, t.jsx)(o.Fragment, {
                    children: (0, t.jsxs)("div", {
                      className: d().inv,
                      children: [
                        (0, t.jsx)("h1", {
                          children: "This user is not claimed yet.",
                        }),
                        (0, t.jsx)("h3", { children: "Claim this name fast!" }),
                        (0, t.jsx)("a", {
                          href: "/register",
                          className: d().lg_g,
                          children: "Claim",
                        }),
                      ],
                    }),
                  })
                : (0, t.jsx)(o.Fragment, {})
              : (0, t.jsxs)(o.Fragment, {
                  children: [
                    (0, t.jsx)("main", {
                      className: s()["main-cont"],
                      children: (0, t.jsxs)("div", {
                        className: ""
                          .concat(s().background, " ")
                          .concat(s()["main-cont"]),
                        style: {
                          backgroundImage: "url(".concat(
                            "" !== e.data.config.url ? e.data.config.url : "",
                            ")"
                          ),
                        },
                        children: [
                          "" !== e.data.config.audio &&
                          "True" === e.data.config.is_audio &&
                          "" !== e.data.config.url &&
                          "True" === e.data.config.is_vid
                            ? (0, t.jsxs)(o.Fragment, {
                                children: [
                                  (0, t.jsx)("div", { id: "a-con-btn-a" }),
                                  (0, t.jsx)("div", {
                                    id: s()["speaker-overlay-audio-vid"],
                                    onClick: () => {
                                      var e = document.getElementById(
                                          "".concat(
                                            s()["speaker-overlay-audio-vid"]
                                          )
                                        ),
                                        a = document.getElementById(
                                          "".concat(s()["audio-control"])
                                        ),
                                        c = document.getElementById(
                                          "".concat(s().vid)
                                        ),
                                        t = document.getElementById("aud-vid");
                                      c.play(),
                                        (t.volume = 0.3),
                                        t.play(),
                                        e.classList.add("".concat(s().hide)),
                                        (a.style.display = "none"),
                                        setTimeout(function () {
                                          e.style.display = "none";
                                        }, 450);
                                    },
                                    children: (0, t.jsx)("div", {
                                      id: s()["audio-control"],
                                      className: "muted",
                                      children:
                                        "" !==
                                        e.data.config.premium.page_enter_text
                                          ? e.data.config.premium
                                              .page_enter_text
                                          : "click to enter...",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: s().bg,
                                    children: [
                                      (0, t.jsx)("video", {
                                        id: s().vid,
                                        loop: !0,
                                        muted: !0,
                                        playsInline: !0,
                                        draggable: !1,
                                        children: (0, t.jsx)("source", {
                                          src: e.data.config.url,
                                          type: "video/mp4",
                                          id: "video-source",
                                        }),
                                      }),
                                      (0, t.jsx)("audio", {
                                        id: "aud-vid",
                                        loop: !0,
                                        children: (0, t.jsx)("source", {
                                          src: e.data.config.audio,
                                          type: "audio/mpeg",
                                        }),
                                      }),
                                    ],
                                  }),
                                  !0 === e.data.config.volume_control &&
                                    (0, t.jsx)(o.Fragment, {
                                      children: (0, t.jsx)("div", {
                                        className: s().mute_div,
                                        children: (0, t.jsx)("button", {
                                          onClick: (e) => {
                                            r("aud-vid");
                                          },
                                          id: "mutebtn__Xa2qIQp",
                                          className: s().mute_btn,
                                          children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "1em",
                                            height: "1em",
                                            viewBox: "0 0 24 24",
                                            children: (0, t.jsx)("path", {
                                              fill: "currentColor",
                                              fillRule: "evenodd",
                                              d: "M13.51 6.303c-.255-1.466-1.932-2.065-3.083-1.25L7.94 6.817A1 1 0 0 1 7.363 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2.363a1 1 0 0 1 .578.184l2.486 1.762c1.15.816 2.828.217 3.083-1.25c.322-1.85.49-3.754.49-5.696c0-1.942-.168-3.845-.49-5.697Zm8.288 1.598a1 1 0 0 0-1.99.198a39.469 39.469 0 0 1 0 7.802a1 1 0 1 0 1.99.198a41.471 41.471 0 0 0 0-8.198Zm-3.925 1.017a1 1 0 1 0-1.993.164a35.506 35.506 0 0 1 0 5.836a1 1 0 0 0 1.993.164a37.465 37.465 0 0 0 0-6.164Z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                ],
                              })
                            : "" !== e.data.config.url &&
                              "True" === e.data.config.is_vid
                            ? (0, t.jsxs)(o.Fragment, {
                                children: [
                                  (0, t.jsx)("div", { id: "a-con-btn-a" }),
                                  (0, t.jsx)("div", {
                                    id: s()["speaker-overlay"],
                                    onClick: () => {
                                      var e = document.getElementById(
                                          "".concat(s()["speaker-overlay"])
                                        ),
                                        a = document.getElementById(
                                          "".concat(s()["audio-control"])
                                        ),
                                        c = document.getElementById(
                                          "".concat(s().vid)
                                        );
                                      (c.volume = 0.35),
                                        c.play(),
                                        e.classList.add("".concat(s().hide)),
                                        (a.style.display = "none"),
                                        setTimeout(function () {
                                          e.style.display = "none";
                                        }, 450);
                                    },
                                    children: (0, t.jsx)("div", {
                                      id: s()["audio-control"],
                                      className: "muted",
                                      children:
                                        "" !==
                                        e.data.config.premium.page_enter_text
                                          ? e.data.config.premium
                                              .page_enter_text
                                          : "click to enter...",
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: s().bg,
                                    children: (0, t.jsx)("video", {
                                      id: s().vid,
                                      loop: !0,
                                      playsInline: !0,
                                      draggable: !1,
                                      children: (0, t.jsx)("source", {
                                        src: e.data.config.url,
                                        type: "video/mp4",
                                        id: "video-source",
                                      }),
                                    }),
                                  }),
                                  !0 === e.data.config.volume_control &&
                                    (0, t.jsx)(o.Fragment, {
                                      children: (0, t.jsx)("div", {
                                        className: s().mute_div,
                                        children: (0, t.jsx)("button", {
                                          onClick: (e) => {
                                            r(s().vid);
                                          },
                                          id: "mutebtn__Xa2qIQp",
                                          className: s().mute_btn,
                                          children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "1em",
                                            height: "1em",
                                            viewBox: "0 0 24 24",
                                            children: (0, t.jsx)("path", {
                                              fill: "currentColor",
                                              fillRule: "evenodd",
                                              d: "M13.51 6.303c-.255-1.466-1.932-2.065-3.083-1.25L7.94 6.817A1 1 0 0 1 7.363 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2.363a1 1 0 0 1 .578.184l2.486 1.762c1.15.816 2.828.217 3.083-1.25c.322-1.85.49-3.754.49-5.696c0-1.942-.168-3.845-.49-5.697Zm8.288 1.598a1 1 0 0 0-1.99.198a39.469 39.469 0 0 1 0 7.802a1 1 0 1 0 1.99.198a41.471 41.471 0 0 0 0-8.198Zm-3.925 1.017a1 1 0 1 0-1.993.164a35.506 35.506 0 0 1 0 5.836a1 1 0 0 0 1.993.164a37.465 37.465 0 0 0 0-6.164Z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                ],
                              })
                            : "" !== e.data.config.audio &&
                              "True" === e.data.config.is_audio
                            ? (0, t.jsxs)(o.Fragment, {
                                children: [
                                  (0, t.jsx)("div", {
                                    id: s()["speaker-overlay-audio"],
                                    onClick: () => {
                                      var e = document.getElementById(
                                          "".concat(
                                            s()["speaker-overlay-audio"]
                                          )
                                        ),
                                        a = document.getElementById(
                                          "".concat(s()["audio-control"])
                                        ),
                                        c = document.getElementById("aud-mp");
                                      (c.volume = 0.3),
                                        c.play(),
                                        e.classList.add("".concat(s().hide)),
                                        (a.style.display = "none"),
                                        setTimeout(function () {
                                          e.style.display = "none";
                                        }, 450);
                                    },
                                    children: (0, t.jsx)("div", {
                                      id: s()["audio-control"],
                                      className: s().muted,
                                      children:
                                        "" !==
                                        e.data.config.premium.page_enter_text
                                          ? e.data.config.premium
                                              .page_enter_text
                                          : "click to enter...",
                                    }),
                                  }),
                                  (0, t.jsx)("audio", {
                                    id: "aud-mp",
                                    loop: !0,
                                    children: (0, t.jsx)("source", {
                                      src: e.data.config.audio,
                                      type: "audio/mpeg",
                                    }),
                                  }),
                                  !0 === e.data.config.volume_control &&
                                    (0, t.jsx)(o.Fragment, {
                                      children: (0, t.jsx)("div", {
                                        className: s().mute_div,
                                        children: (0, t.jsx)("button", {
                                          onClick: (e) => {
                                            r("aud-mp");
                                          },
                                          id: "mutebtn__Xa2qIQp",
                                          className: s().mute_btn,
                                          children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "1em",
                                            height: "1em",
                                            viewBox: "0 0 24 24",
                                            children: (0, t.jsx)("path", {
                                              fill: "currentColor",
                                              fillRule: "evenodd",
                                              d: "M13.51 6.303c-.255-1.466-1.932-2.065-3.083-1.25L7.94 6.817A1 1 0 0 1 7.363 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2.363a1 1 0 0 1 .578.184l2.486 1.762c1.15.816 2.828.217 3.083-1.25c.322-1.85.49-3.754.49-5.696c0-1.942-.168-3.845-.49-5.697Zm8.288 1.598a1 1 0 0 0-1.99.198a39.469 39.469 0 0 1 0 7.802a1 1 0 1 0 1.99.198a41.471 41.471 0 0 0 0-8.198Zm-3.925 1.017a1 1 0 1 0-1.993.164a35.506 35.506 0 0 1 0 5.836a1 1 0 0 0 1.993.164a37.465 37.465 0 0 0 0-6.164Z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                ],
                              })
                            : !0 === e.data.config.premium.force_enter
                            ? (0, t.jsx)(o.Fragment, {
                                children: (0, t.jsx)("div", {
                                  id: s()["premium-enter"],
                                  onClick: () => {
                                    var e = document.getElementById(
                                        "".concat(s()["premium-enter"])
                                      ),
                                      a = document.getElementById(
                                        "".concat(s()["audio-control"])
                                      );
                                    e.classList.add("".concat(s().hide)),
                                      (a.style.display = "none"),
                                      setTimeout(function () {
                                        e.style.display = "none";
                                      }, 450);
                                  },
                                  children: (0, t.jsx)("div", {
                                    id: s()["audio-control"],
                                    className: s().muted,
                                    children:
                                      "" !==
                                      e.data.config.premium.page_enter_text
                                        ? e.data.config.premium.page_enter_text
                                        : "click to enter...",
                                  }),
                                }),
                              })
                            : null,
                          "snowflakes" === e.data.config.background_effects
                            ? (0, t.jsx)(o.Fragment, {
                                children: (0, t.jsxs)("div", {
                                  className: s().snowflakes,
                                  "aria-hidden": "true",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❅",
                                    }),
                                    (0, t.jsx)("div", {
                                      className: s().snowflake,
                                      children: "❆",
                                    }),
                                  ],
                                }),
                              })
                            : "rain" === e.data.config.background_effects
                            ? (0, t.jsxs)(o.Fragment, {
                                children: [
                                  (0, t.jsx)(f(), {
                                    strategy: "beforeInteractive",
                                    src: "https://cdn.hris.rip/snowstorm-min.js",
                                  }),
                                  (0, t.jsx)(m.q, {
                                    children: (0, t.jsx)("script", {
                                      children:
                                        "\n                                                      snowStorm.snowColor = '".concat(
                                          e.data.config.text_color,
                                          "';\n                                                      snowStorm.flakesMaxActive = 95;\n                                                      snowStorm.useTwinkleEffect = true;\n                                                      snowStorm.autoStart = true;\n                                                      snowStorm.freezeOnBlur = false;\n                                                      snowStorm.excludeMobile = false;\n                                                    "
                                        ),
                                    }),
                                  }),
                                ],
                              })
                            : "tv" === e.data.config.background_effects
                            ? (0, t.jsx)(o.Fragment, {
                                children: (0, t.jsx)("div", { id: s().pat }),
                              })
                            : null,
                          (0, t.jsxs)("div", {
                            className: s().container,
                            children: [
                              !1 === e.data.config.premium.hide_views &&
                                (0, t.jsx)(o.Fragment, {
                                  children: (0, t.jsxs)("div", {
                                    className: ""
                                      .concat(s()["views-counter"], " ")
                                      .concat(s()["font-r"]),
                                    style: { color: e.data.config.text_color },
                                    children: [
                                      (0, t.jsx)(h.e, {
                                        content: "Profile Views",
                                        closeDelay: 150,
                                        showArrow: !1,
                                        offset: 2.2,
                                        classNames: {
                                          base: "rounded-md text-white ".concat(
                                            s().tt,
                                            " border-2"
                                          ),
                                          arrow: "".concat(
                                            s().arr,
                                            " border-2"
                                          ),
                                        },
                                        children: (0, t.jsx)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          "data-tooltip-content":
                                            "Profile Views",
                                          className: "".concat(s()["view-A"]),
                                          style: {
                                            fontSize: "21px",
                                            marginRight: "4.8px",
                                            color: e.data.config.text_color,
                                          },
                                          width: "1em",
                                          height: "1em",
                                          viewBox: "0 0 24 24",
                                          children: (0, t.jsx)("path", {
                                            fill: "currentColor",
                                            d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z",
                                          }),
                                        }),
                                      }),
                                      e.data.config.page_views,
                                    ],
                                  }),
                                }),
                              (0, t.jsxs)("div", {
                                className: s().prf,
                                children: [
                                  "" !== e.data.config.avatar &&
                                    (0, t.jsx)("div", {
                                      id: s().ss,
                                      children: (0, t.jsx)("img", {
                                        draggable: "false",
                                        className: s().av,
                                        src: e.data.config.avatar,
                                      }),
                                    }),
                                  (0, t.jsx)("div", {
                                    className: s()["container-user"],
                                    children: (0, t.jsxs)("div", {
                                      className: s().centered,
                                      children: [
                                        (0, t.jsx)("p", {
                                          id: s().tp,
                                          style: {
                                            color: e.data.config.text_color,
                                            textShadow:
                                              "0px 0px 16.5px ".concat(
                                                e.data.config.text_color
                                              ),
                                            marginBottom:
                                              (0 !==
                                                e.data.config.user_badges
                                                  .length &&
                                                !0 !==
                                                  e.data.config.premium
                                                    .hide_badges) ||
                                              "" !== e.data.config.description
                                                ? "1px"
                                                : "6px",
                                          },
                                          children: e.data.config.display_name,
                                        }),
                                        !0 === e.data.config.premium.hide_badges
                                          ? null
                                          : (0, t.jsx)(o.Fragment, {
                                              children:
                                                0 !==
                                                  e.data.config.user_badges
                                                    .length &&
                                                (0, t.jsx)(o.Fragment, {
                                                  children: (0, t.jsx)("div", {
                                                    className: "".concat(
                                                      s()[
                                                        "badge-container-below"
                                                      ]
                                                    ),
                                                    style: {
                                                      backgroundColor:
                                                        e.data.config
                                                          .badge_background,
                                                      border:
                                                        "1px solid ".concat(
                                                          e.data.config
                                                            .badge_border
                                                        ),
                                                      marginBottom:
                                                        "" !==
                                                        e.data.config
                                                          .description
                                                          ? "6px"
                                                          : "20px",
                                                    },
                                                    children:
                                                      e.data.config.user_badges.map(
                                                        (e) =>
                                                          (0, t.jsx)(
                                                            o.Fragment,
                                                            {
                                                              children: (0,
                                                              t.jsx)(h.e, {
                                                                content:
                                                                  "verified" ===
                                                                  e
                                                                    ? "Verified"
                                                                    : "og" === e
                                                                    ? "OG"
                                                                    : "staff" ==
                                                                      e
                                                                    ? "Staff"
                                                                    : "donor" ==
                                                                      e
                                                                    ? "Donor"
                                                                    : "premium" ==
                                                                      e
                                                                    ? "Premium"
                                                                    : "server_booster" ==
                                                                      e
                                                                    ? "Server Booster"
                                                                    : null,
                                                                closeDelay: 150,
                                                                showArrow: !1,
                                                                offset: 7,
                                                                classNames: {
                                                                  base: "rounded-md text-white ".concat(
                                                                    s().tt,
                                                                    " border-2"
                                                                  ),
                                                                  arrow:
                                                                    "".concat(
                                                                      s().arr,
                                                                      " border-2"
                                                                    ),
                                                                },
                                                                children: (0,
                                                                t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    "data-tooltip-id":
                                                                      "verified" ===
                                                                      e
                                                                        ? "Verified"
                                                                        : "og" ===
                                                                          e
                                                                        ? "OG"
                                                                        : "staff" ==
                                                                          e
                                                                        ? "Staff"
                                                                        : "donor" ==
                                                                          e
                                                                        ? "Donor"
                                                                        : "premium" ==
                                                                          e
                                                                        ? "Premium"
                                                                        : "server_booster" ==
                                                                          e
                                                                        ? "Server Booster"
                                                                        : null,
                                                                    "data-tooltip-delay-show": 70,
                                                                    "data-tooltip-content":
                                                                      "verified" ===
                                                                      e
                                                                        ? "Verified"
                                                                        : "og" ===
                                                                          e
                                                                        ? "OG"
                                                                        : "staff" ==
                                                                          e
                                                                        ? "Staff"
                                                                        : "donor" ==
                                                                          e
                                                                        ? "Donor"
                                                                        : "premium" ==
                                                                          e
                                                                        ? "Premium"
                                                                        : "server_booster" ==
                                                                          e
                                                                        ? "Server Booster"
                                                                        : null,
                                                                    "data-inline":
                                                                      "false",
                                                                    children: [
                                                                      "verified" ===
                                                                        e &&
                                                                        n.verified,
                                                                      "og" ===
                                                                        e &&
                                                                        n.og,
                                                                      "donor" ===
                                                                        e &&
                                                                        n.donor,
                                                                      "premium" ===
                                                                        e &&
                                                                        n.premium,
                                                                      "staff" ===
                                                                        e &&
                                                                        n.staff,
                                                                      "server_booster" ===
                                                                        e &&
                                                                        n.booster,
                                                                    ],
                                                                  },
                                                                  e
                                                                ),
                                                              }),
                                                            }
                                                          )
                                                      ),
                                                  }),
                                                }),
                                            }),
                                        (0, t.jsx)("div", {
                                          className: s()["d-b"],
                                          children:
                                            "" !== e.data.config.description
                                              ? (0, t.jsx)(o.Fragment, {
                                                  children:
                                                    !1 ===
                                                    e.data.config.premium
                                                      .animated_description
                                                      ? (0, t.jsx)("h1", {
                                                          className: ""
                                                            .concat(
                                                              s().under,
                                                              " "
                                                            )
                                                            .concat(
                                                              s()["font-r"]
                                                            ),
                                                          style: {
                                                            color:
                                                              e.data.config
                                                                .text_color,
                                                          },
                                                          id: "_x01",
                                                          children:
                                                            !0 ===
                                                            e.data.config
                                                              .premium
                                                              .animated_description
                                                              ? null
                                                              : e.data.config
                                                                  .description,
                                                        })
                                                      : (0, t.jsx)("h1", {
                                                          className: ""
                                                            .concat(
                                                              s().under,
                                                              " "
                                                            )
                                                            .concat(
                                                              s()["font-r"],
                                                              " "
                                                            )
                                                            .concat(
                                                              s().typewrite
                                                            ),
                                                          style: {
                                                            color:
                                                              e.data.config
                                                                .text_color,
                                                          },
                                                          children: (0, t.jsx)(
                                                            b(),
                                                            {
                                                              options: {
                                                                strings: [
                                                                  "".concat(
                                                                    e.data
                                                                      .config
                                                                      .description
                                                                  ),
                                                                ],
                                                                autoStart: !0,
                                                                loop: !0,
                                                              },
                                                            }
                                                          ),
                                                        }),
                                                })
                                              : null,
                                        }),
                                        "enabled" === e.data.config.presence
                                          ? (0, t.jsx)(o.Fragment, {
                                              children:
                                                void 0 !== e.spotify.spotify
                                                  ? (0, t.jsx)(o.Fragment, {
                                                      children: (0, t.jsx)(
                                                        "div",
                                                        {
                                                          className: s().dsb,
                                                          style: {
                                                            paddingTop:
                                                              "" !==
                                                                e.data.config
                                                                  .description &&
                                                              "" !==
                                                                e.data.config
                                                                  .socials
                                                                ? "10px"
                                                                : "5px",
                                                            paddingBottom:
                                                              "" !==
                                                                e.data.config
                                                                  .description &&
                                                              "" !==
                                                                e.data.config
                                                                  .socials
                                                                ? "15px"
                                                                : "19px",
                                                          },
                                                          children:
                                                            !0 ===
                                                            e.spotify.spotify
                                                              .success
                                                              ? (0, t.jsx)(
                                                                  o.Fragment,
                                                                  {
                                                                    children:
                                                                      (0,
                                                                      t.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            s()
                                                                              .left,
                                                                          style:
                                                                            {
                                                                              backgroundColor:
                                                                                e
                                                                                  .data
                                                                                  .config
                                                                                  .presence_bg,
                                                                              border:
                                                                                "1px solid ".concat(
                                                                                  e
                                                                                    .data
                                                                                    .config
                                                                                    .presence_border
                                                                                ),
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              t.jsx)(
                                                                                "img",
                                                                                {
                                                                                  src: e
                                                                                    .spotify
                                                                                    .avatar,
                                                                                  height: 65,
                                                                                  draggable:
                                                                                    !1,
                                                                                  width: 65,
                                                                                  className:
                                                                                    s()
                                                                                      .pfp,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              t.jsxs)(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    s()
                                                                                      .info,
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h1",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .spotify
                                                                                                .username,
                                                                                              e
                                                                                                .spotify
                                                                                                .discriminator,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h3",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              "Listening to ",
                                                                                              e
                                                                                                .spotify
                                                                                                .spotify
                                                                                                .title,
                                                                                              (0,
                                                                                              t.jsx)(
                                                                                                "br",
                                                                                                {}
                                                                                              ),
                                                                                              "by ",
                                                                                              e
                                                                                                .spotify
                                                                                                .spotify
                                                                                                .artist,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      "dnd" ===
                                                                                      e
                                                                                        .spotify
                                                                                        .presence
                                                                                        .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .dnd,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z",
                                                                                                          fill: "currentColor",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "online" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .online,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "offline" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .offline,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M16.06 7.94a1.5 1.5 0 0 1 0 2.12L14.122 12l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12L12 14.122l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.122L9.878 12l-1.94-1.94a1.5 1.5 0 1 1 2.122-2.12L12 9.878l1.94-1.94a1.5 1.5 0 0 1 2.12 0ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12Zm12-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "idle" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .idle,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 256 256",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : null,
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              t.jsx)(
                                                                                "img",
                                                                                {
                                                                                  src: e
                                                                                    .spotify
                                                                                    .spotify
                                                                                    .album_cover,
                                                                                  height: 65,
                                                                                  width: 65,
                                                                                  draggable:
                                                                                    !1,
                                                                                  className:
                                                                                    s()
                                                                                      .cover,
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  }
                                                                )
                                                              : !0 ===
                                                                  e.spotify
                                                                    .presence
                                                                    .first &&
                                                                !1 ===
                                                                  e.spotify
                                                                    .presence
                                                                    .is_custom
                                                              ? (0, t.jsx)(
                                                                  o.Fragment,
                                                                  {
                                                                    children:
                                                                      (0,
                                                                      t.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            s()
                                                                              .left,
                                                                          style:
                                                                            {
                                                                              backgroundColor:
                                                                                e
                                                                                  .data
                                                                                  .config
                                                                                  .badge_background,
                                                                              border:
                                                                                "1px solid ".concat(
                                                                                  e
                                                                                    .data
                                                                                    .config
                                                                                    .badge_border
                                                                                ),
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              t.jsx)(
                                                                                "img",
                                                                                {
                                                                                  src: e
                                                                                    .spotify
                                                                                    .avatar,
                                                                                  height: 65,
                                                                                  draggable:
                                                                                    !1,
                                                                                  width: 65,
                                                                                  className:
                                                                                    s()
                                                                                      .pfp,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              t.jsxs)(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    s()
                                                                                      .info,
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h1",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .spotify
                                                                                                .username,
                                                                                              e
                                                                                                .spotify
                                                                                                .discriminator,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h3",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              0 ===
                                                                                              e
                                                                                                .spotify
                                                                                                .presence
                                                                                                .type
                                                                                                ? "Playing"
                                                                                                : 1 ===
                                                                                                  e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .type
                                                                                                ? "Streaming"
                                                                                                : 2 ===
                                                                                                  e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .type
                                                                                                ? "Listening"
                                                                                                : 3 ===
                                                                                                  e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .type
                                                                                                ? "Watching"
                                                                                                : 5 ===
                                                                                                  e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .type
                                                                                                ? "Competing"
                                                                                                : "",
                                                                                              " ",
                                                                                              e
                                                                                                .spotify
                                                                                                .presence
                                                                                                .name,
                                                                                              (0,
                                                                                              t.jsx)(
                                                                                                "br",
                                                                                                {}
                                                                                              ),
                                                                                              e
                                                                                                .spotify
                                                                                                .presence
                                                                                                .details,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      "dnd" ===
                                                                                      e
                                                                                        .spotify
                                                                                        .presence
                                                                                        .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .dnd,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z",
                                                                                                          fill: "currentColor",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "online" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .online,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "offline" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .offline,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M16.06 7.94a1.5 1.5 0 0 1 0 2.12L14.122 12l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12L12 14.122l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.122L9.878 12l-1.94-1.94a1.5 1.5 0 1 1 2.122-2.12L12 9.878l1.94-1.94a1.5 1.5 0 0 1 2.12 0ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12Zm12-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "idle" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .idle,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 256 256",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : null,
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              void 0 !==
                                                                                e
                                                                                  .spotify
                                                                                  .presence
                                                                                  .is_game ||
                                                                              "INVALID_IMAGE" ===
                                                                                e
                                                                                  .spotify
                                                                                  .presence
                                                                                  .image ||
                                                                              null ===
                                                                                e
                                                                                  .spotify
                                                                                  .presence
                                                                                  .image ||
                                                                              "" ===
                                                                                e
                                                                                  .spotify
                                                                                  .presence
                                                                                  .image
                                                                                ? (0,
                                                                                  t.jsx)(
                                                                                    o.Fragment,
                                                                                    {
                                                                                      children:
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                          "svg",
                                                                                          {
                                                                                            className:
                                                                                              s()
                                                                                                .unknown_game,
                                                                                            style:
                                                                                              {
                                                                                                color:
                                                                                                  e
                                                                                                    .data
                                                                                                    .config
                                                                                                    .text_color,
                                                                                              },
                                                                                            "aria-hidden":
                                                                                              "true",
                                                                                            role: "img",
                                                                                            width:
                                                                                              "24",
                                                                                            height:
                                                                                              "24",
                                                                                            viewBox:
                                                                                              "0 0 40 40",
                                                                                            children:
                                                                                              (0,
                                                                                              t.jsxs)(
                                                                                                "g",
                                                                                                {
                                                                                                  fill: "none",
                                                                                                  "fill-rule":
                                                                                                    "evenodd",
                                                                                                  children:
                                                                                                    [
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          "fill-opacity":
                                                                                                            ".8",
                                                                                                          d: "M21.226 30v-4.154h-3.755V30h3.755zm-.512-8.62c3.67-1.337 5.718-2.959 5.718-6.145 0-3.272-2.36-5.235-6.088-5.235-2.589 0-4.637.825-6.344 2.048l.484 3.3c1.621-1.251 3.47-2.162 5.49-2.162 1.707 0 2.845.854 2.845 2.305 0 1.593-1.08 2.475-3.812 3.442l-.882.342.342 4.523 2.076-.455.171-1.963z",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "rect",
                                                                                                        {
                                                                                                          width:
                                                                                                            "38",
                                                                                                          height:
                                                                                                            "38",
                                                                                                          x: "1",
                                                                                                          y: "1",
                                                                                                          stroke:
                                                                                                            "currentColor",
                                                                                                          "stroke-opacity":
                                                                                                            ".4",
                                                                                                          "stroke-width":
                                                                                                            "2",
                                                                                                          rx: "5",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "circle",
                                                                                                        {
                                                                                                          cx: "7",
                                                                                                          cy: "7",
                                                                                                          r: "2",
                                                                                                          fill: "currentColor",
                                                                                                          "fill-opacity":
                                                                                                            ".4",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "circle",
                                                                                                        {
                                                                                                          cx: "7",
                                                                                                          cy: "33",
                                                                                                          r: "2",
                                                                                                          fill: "currentColor",
                                                                                                          "fill-opacity":
                                                                                                            ".4",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "circle",
                                                                                                        {
                                                                                                          cx: "33",
                                                                                                          cy: "7",
                                                                                                          r: "2",
                                                                                                          fill: "currentColor",
                                                                                                          "fill-opacity":
                                                                                                            ".4",
                                                                                                        }
                                                                                                      ),
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "circle",
                                                                                                        {
                                                                                                          cx: "33",
                                                                                                          cy: "33",
                                                                                                          r: "2",
                                                                                                          fill: "currentColor",
                                                                                                          "fill-opacity":
                                                                                                            ".4",
                                                                                                        }
                                                                                                      ),
                                                                                                    ],
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  )
                                                                                : (0,
                                                                                  t.jsx)(
                                                                                    o.Fragment,
                                                                                    {
                                                                                      children:
                                                                                        (0,
                                                                                        t.jsx)(
                                                                                          "img",
                                                                                          {
                                                                                            src: e
                                                                                              .spotify
                                                                                              .presence
                                                                                              .image,
                                                                                            height: 65,
                                                                                            width: 65,
                                                                                            draggable:
                                                                                              !1,
                                                                                            className:
                                                                                              s()
                                                                                                .cover,
                                                                                          }
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  }
                                                                )
                                                              : !0 ===
                                                                e.spotify
                                                                  .presence
                                                                  .is_custom
                                                              ? (0, t.jsx)(
                                                                  o.Fragment,
                                                                  {
                                                                    children:
                                                                      (0,
                                                                      t.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            s()
                                                                              .left,
                                                                          style:
                                                                            {
                                                                              backgroundColor:
                                                                                e
                                                                                  .data
                                                                                  .config
                                                                                  .badge_background,
                                                                              border:
                                                                                "1px solid ".concat(
                                                                                  e
                                                                                    .data
                                                                                    .config
                                                                                    .badge_border
                                                                                ),
                                                                            },
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              t.jsx)(
                                                                                "img",
                                                                                {
                                                                                  src: e
                                                                                    .spotify
                                                                                    .avatar,
                                                                                  height: 65,
                                                                                  draggable:
                                                                                    !1,
                                                                                  width: 65,
                                                                                  className:
                                                                                    s()
                                                                                      .pfp,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              t.jsxs)(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    s()
                                                                                      .info,
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h1",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                              marginRight: 3,
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              e
                                                                                                .spotify
                                                                                                .username,
                                                                                              e
                                                                                                .spotify
                                                                                                .discriminator,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      t.jsxs)(
                                                                                        "h3",
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                e
                                                                                                  .data
                                                                                                  .config
                                                                                                  .text_color,
                                                                                              display:
                                                                                                "flex",
                                                                                              justifyContent:
                                                                                                "left",
                                                                                              marginTop: 4.5,
                                                                                              fontStyle:
                                                                                                "currently doing nothing" ===
                                                                                                e
                                                                                                  .spotify
                                                                                                  .presence
                                                                                                  .name
                                                                                                  ? "italic"
                                                                                                  : "normal",
                                                                                            },
                                                                                          children:
                                                                                            [
                                                                                              "" !==
                                                                                                e
                                                                                                  .spotify
                                                                                                  .presence
                                                                                                  .emoji &&
                                                                                              void 0 ===
                                                                                                e
                                                                                                  .spotify
                                                                                                  .presence
                                                                                                  .custom_emoji
                                                                                                ? (0,
                                                                                                  t.jsx)(
                                                                                                    "img",
                                                                                                    {
                                                                                                      src: e
                                                                                                        .spotify
                                                                                                        .presence
                                                                                                        .emoji,
                                                                                                      height: 19,
                                                                                                      width: 19,
                                                                                                      draggable:
                                                                                                        !1,
                                                                                                      className:
                                                                                                        s()
                                                                                                          .emoji,
                                                                                                    }
                                                                                                  )
                                                                                                : e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .emoji,
                                                                                              "offline" ===
                                                                                              e
                                                                                                .spotify
                                                                                                .presence
                                                                                                .status
                                                                                                ? void 0 !==
                                                                                                  e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .last_seen
                                                                                                  ? "last seen " +
                                                                                                    e
                                                                                                      .spotify
                                                                                                      .presence
                                                                                                      .last_seen
                                                                                                  : "last seen unknown"
                                                                                                : e
                                                                                                    .spotify
                                                                                                    .presence
                                                                                                    .name,
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      "dnd" ===
                                                                                      e
                                                                                        .spotify
                                                                                        .presence
                                                                                        .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .dnd,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          d: "M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z",
                                                                                                          fill: "currentColor",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "online" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .online,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "offline" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .offline,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 24 24",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M16.06 7.94a1.5 1.5 0 0 1 0 2.12L14.122 12l1.94 1.94a1.5 1.5 0 0 1-2.122 2.12L12 14.122l-1.94 1.94a1.5 1.5 0 0 1-2.12-2.122L9.878 12l-1.94-1.94a1.5 1.5 0 1 1 2.122-2.12L12 9.878l1.94-1.94a1.5 1.5 0 0 1 2.12 0ZM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12Zm12-9a9 9 0 1 0 0 18a9 9 0 0 0 0-18Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : "idle" ===
                                                                                          e
                                                                                            .spotify
                                                                                            .presence
                                                                                            .status
                                                                                        ? (0,
                                                                                          t.jsx)(
                                                                                            "div",
                                                                                            {
                                                                                              className:
                                                                                                s()
                                                                                                  .idle,
                                                                                              children:
                                                                                                (0,
                                                                                                t.jsx)(
                                                                                                  "svg",
                                                                                                  {
                                                                                                    xmlns:
                                                                                                      "http://www.w3.org/2000/svg",
                                                                                                    width:
                                                                                                      "1em",
                                                                                                    height:
                                                                                                      "1em",
                                                                                                    viewBox:
                                                                                                      "0 0 256 256",
                                                                                                    children:
                                                                                                      (0,
                                                                                                      t.jsx)(
                                                                                                        "path",
                                                                                                        {
                                                                                                          fill: "currentColor",
                                                                                                          d: "M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z",
                                                                                                        }
                                                                                                      ),
                                                                                                  }
                                                                                                ),
                                                                                            }
                                                                                          )
                                                                                        : null,
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  }
                                                                )
                                                              : (0, t.jsx)(
                                                                  o.Fragment,
                                                                  {
                                                                    children:
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            s()
                                                                              .left,
                                                                          style:
                                                                            {
                                                                              backgroundColor:
                                                                                e
                                                                                  .data
                                                                                  .config
                                                                                  .badge_background,
                                                                              border:
                                                                                "1px solid ".concat(
                                                                                  e
                                                                                    .data
                                                                                    .config
                                                                                    .badge_border
                                                                                ),
                                                                            },
                                                                          children:
                                                                            (0,
                                                                            t.jsxs)(
                                                                              "div",
                                                                              {
                                                                                className:
                                                                                  s()
                                                                                    .info_invalid,
                                                                                children:
                                                                                  [
                                                                                    (0,
                                                                                    t.jsxs)(
                                                                                      "h1",
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            color:
                                                                                              e
                                                                                                .data
                                                                                                .config
                                                                                                .text_color,
                                                                                            marginRight: 3,
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                              "svg",
                                                                                              {
                                                                                                style:
                                                                                                  {
                                                                                                    verticalAlign:
                                                                                                      "-3px",
                                                                                                    fontSize:
                                                                                                      "22px",
                                                                                                    color:
                                                                                                      "#ff3333",
                                                                                                  },
                                                                                                xmlns:
                                                                                                  "http://www.w3.org/2000/svg",
                                                                                                width:
                                                                                                  "1em",
                                                                                                height:
                                                                                                  "1em",
                                                                                                viewBox:
                                                                                                  "0 0 48 48",
                                                                                                children:
                                                                                                  (0,
                                                                                                  t.jsx)(
                                                                                                    "path",
                                                                                                    {
                                                                                                      fill: "none",
                                                                                                      stroke:
                                                                                                        "currentColor",
                                                                                                      strokeLinecap:
                                                                                                        "round",
                                                                                                      strokeLinejoin:
                                                                                                        "round",
                                                                                                      strokeWidth:
                                                                                                        "4",
                                                                                                      d: "m6 11l5-5l13 13L37 6l5 5l-13 13l13 13l-5 5l-13-13l-13 13l-5-5l13-13L6 11Z",
                                                                                                      clipRule:
                                                                                                        "evenodd",
                                                                                                    }
                                                                                                  ),
                                                                                              }
                                                                                            ),
                                                                                            " User not found",
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                    (0,
                                                                                    t.jsxs)(
                                                                                      "h3",
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            color:
                                                                                              e
                                                                                                .data
                                                                                                .config
                                                                                                .text_color,
                                                                                          },
                                                                                        children:
                                                                                          [
                                                                                            "Join ",
                                                                                            (0,
                                                                                            t.jsx)(
                                                                                              u(),
                                                                                              {
                                                                                                href: "https://discord.gg/guns",
                                                                                                target:
                                                                                                  "_blank",
                                                                                                style:
                                                                                                  {
                                                                                                    color:
                                                                                                      "#bbbbbb",
                                                                                                    textDecoration:
                                                                                                      "none",
                                                                                                  },
                                                                                                children:
                                                                                                  "discord.gg/guns",
                                                                                              }
                                                                                            ),
                                                                                            " to display your status.",
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                        }
                                                      ),
                                                    })
                                                  : null,
                                            })
                                          : null,
                                        (0, t.jsx)("div", {
                                          className: s()["icons-wrapper"],
                                          children: (0, t.jsx)("div", {
                                            className: s()["icons-soc"],
                                            children: Object.keys(
                                              e.data.config.socials
                                            ).map((a, o) => {
                                              let n = e.data.config.socials[a];
                                              return n.startsWith("https://")
                                                ? (0, t.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        s()[
                                                          "div-wrapper-scs-c"
                                                        ],
                                                      children: (0, t.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            s()[
                                                              "div-scs-icon-val"
                                                            ],
                                                          children: (0, t.jsxs)(
                                                            "a",
                                                            {
                                                              href: n,
                                                              target: "_blank",
                                                              className:
                                                                s().aaaaaa,
                                                              children: [
                                                                "custom_url" ===
                                                                  a &&
                                                                  c.custom_url,
                                                                "youtube" ===
                                                                  a &&
                                                                  c.youtube,
                                                                "github" ===
                                                                  a && c.github,
                                                                "instagram" ===
                                                                  a &&
                                                                  c.instagram,
                                                                "tiktok" ===
                                                                  a && c.tiktok,
                                                                "discord" ===
                                                                  a &&
                                                                  c.discord,
                                                                "paypal" ===
                                                                  a && c.paypal,
                                                                "spotify" ===
                                                                  a &&
                                                                  c.spotify,
                                                                "telegram" ===
                                                                  a &&
                                                                  c.telegram,
                                                                "steam" === a &&
                                                                  c.steam,
                                                                "roblox" ===
                                                                  a && c.roblox,
                                                                "cashapp" ===
                                                                  a &&
                                                                  c.cashapp,
                                                                "twitch" ===
                                                                  a && c.twitch,
                                                                "reddit" ===
                                                                  a && c.reddit,
                                                                "kick" === a &&
                                                                  c.kick,
                                                                "x" === a &&
                                                                  c.x,
                                                                "soundcloud" ===
                                                                  a &&
                                                                  c.soundcloud,
                                                              ],
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    },
                                                    o
                                                  )
                                                : null;
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    "" !== e.data.config.premium.cursor_effects &&
                      (0, t.jsxs)(o.Fragment, {
                        children: [
                          (0, t.jsx)(f(), {
                            strategy: "beforeInteractive",
                            src: "https://unpkg.com/cursor-effects@latest/dist/browser.js",
                          }),
                          "bubbles" === e.data.config.premium.cursor_effects
                            ? (0, t.jsx)(m.q, {
                                children: (0, t.jsx)("script", {
                                  children:
                                    '\n                                                      new cursoreffects.bubbleCursor({\n                                                        color: ["'.concat(
                                      e.data.config.premium.effects_color,
                                      '"]\n                                                      });\n                                                    '
                                    ),
                                }),
                              })
                            : "dot" == e.data.config.premium.cursor_effects
                            ? (0, t.jsx)(m.q, {
                                children: (0, t.jsx)("script", {
                                  children:
                                    '\n                                                    new cursoreffects.followingDotCursor({\n                                                    color: ["'.concat(
                                      e.data.config.premium.effects_color,
                                      '"]\n                                                    });\n                                                '
                                    ),
                                }),
                              })
                            : "snowflakes" ===
                              e.data.config.premium.cursor_effects
                            ? (0, t.jsx)(m.q, {
                                children: (0, t.jsx)("script", {
                                  children:
                                    '\n                                                        new cursoreffects.snowflakeCursor({\n                                                        color: ["'.concat(
                                      e.data.config.premium.effects_color,
                                      '"]\n                                                        });\n                                                    '
                                    ),
                                }),
                              })
                            : "particles" ===
                              e.data.config.premium.cursor_effects
                            ? (0, t.jsx)(m.q, {
                                children: (0, t.jsx)("script", {
                                  children:
                                    '\n                                                        new cursoreffects.fairyDustCursor({\n                                                        colors: ["'.concat(
                                      e.data.config.premium.effects_color,
                                      '"]\n                                                        });\n                                                    '
                                    ),
                                }),
                              })
                            : null,
                        ],
                      }),
                  ],
                }),
          ],
        });
      }
    },
    5430: function (e) {
      e.exports = {
        inv: "s_789183b7e98646c11d5f0544c8f3c4c9_inv__P6TGg",
        lg_g: "s_789183b7e98646c11d5f0544c8f3c4c9_lg_g__F2f9L",
        center: "s_789183b7e98646c11d5f0544c8f3c4c9_center__oCs2c",
        f: "s_789183b7e98646c11d5f0544c8f3c4c9_f__M7YHO",
        f3: "s_789183b7e98646c11d5f0544c8f3c4c9_f3__foahv",
        "f-2": "s_789183b7e98646c11d5f0544c8f3c4c9_f-2__IWk_U",
        prd: "s_789183b7e98646c11d5f0544c8f3c4c9_prd__OmEKW",
        inp: "s_789183b7e98646c11d5f0544c8f3c4c9_inp__3APAY",
        submit: "s_789183b7e98646c11d5f0544c8f3c4c9_submit__PMfmA",
        label: "s_789183b7e98646c11d5f0544c8f3c4c9_label__R_ZNv",
        desc: "s_789183b7e98646c11d5f0544c8f3c4c9_desc__axf8T",
        error: "s_789183b7e98646c11d5f0544c8f3c4c9_error__Wcu5e",
      };
    },
    4449: function (e) {
      e.exports = {
        ss: "u_ee11cbb19052e40b07aac0ca060c23ee_ss__Kh8I0",
        "audio-control":
          "u_ee11cbb19052e40b07aac0ca060c23ee_audio-control__POgpq",
        "div-wrapper-scs-c":
          "u_ee11cbb19052e40b07aac0ca060c23ee_div-wrapper-scs-c__neVff",
        point: "u_ee11cbb19052e40b07aac0ca060c23ee_point__dMTtV",
        "div-scs-icon-val":
          "u_ee11cbb19052e40b07aac0ca060c23ee_div-scs-icon-val__SO5s_",
        "icons-soc": "u_ee11cbb19052e40b07aac0ca060c23ee_icons-soc__8B_rM",
        "icons-wrapper":
          "u_ee11cbb19052e40b07aac0ca060c23ee_icons-wrapper__tUDw3",
        container: "u_ee11cbb19052e40b07aac0ca060c23ee_container__MY5Hi",
        tp: "u_ee11cbb19052e40b07aac0ca060c23ee_tp__llrX4",
        info: "u_ee11cbb19052e40b07aac0ca060c23ee_info__dm6D_",
        mute_btn: "u_ee11cbb19052e40b07aac0ca060c23ee_mute_btn__zR77_",
        fl: "u_ee11cbb19052e40b07aac0ca060c23ee_fl__jEeLP",
        "main-cont": "u_ee11cbb19052e40b07aac0ca060c23ee_main-cont__zmSkV",
        background: "u_ee11cbb19052e40b07aac0ca060c23ee_background__dYYjr",
        under: "u_ee11cbb19052e40b07aac0ca060c23ee_under__E9n1x",
        discord: "u_ee11cbb19052e40b07aac0ca060c23ee_discord__CzQ5W",
        tiktok: "u_ee11cbb19052e40b07aac0ca060c23ee_tiktok__O5Vgm",
        github: "u_ee11cbb19052e40b07aac0ca060c23ee_github__rIKio",
        spotify: "u_ee11cbb19052e40b07aac0ca060c23ee_spotify__QzjlY",
        instagram: "u_ee11cbb19052e40b07aac0ca060c23ee_instagram__kYqRX",
        custom: "u_ee11cbb19052e40b07aac0ca060c23ee_custom__c0WMo",
        paypal: "u_ee11cbb19052e40b07aac0ca060c23ee_paypal__X_7mJ",
        telegram: "u_ee11cbb19052e40b07aac0ca060c23ee_telegram__hkiGo",
        youtube: "u_ee11cbb19052e40b07aac0ca060c23ee_youtube__pBmNK",
        steam: "u_ee11cbb19052e40b07aac0ca060c23ee_steam__iHdM_",
        roblox: "u_ee11cbb19052e40b07aac0ca060c23ee_roblox__ba0nR",
        cashapp: "u_ee11cbb19052e40b07aac0ca060c23ee_cashapp__O3aWR",
        twitch: "u_ee11cbb19052e40b07aac0ca060c23ee_twitch__UzoAF",
        reddit: "u_ee11cbb19052e40b07aac0ca060c23ee_reddit__4sIlc",
        kick: "u_ee11cbb19052e40b07aac0ca060c23ee_kick__vV4AT",
        x: "u_ee11cbb19052e40b07aac0ca060c23ee_x__WC8it",
        soundcloud: "u_ee11cbb19052e40b07aac0ca060c23ee_soundcloud__gFgpM",
        lanyard: "u_ee11cbb19052e40b07aac0ca060c23ee_lanyard__1d3YI",
        transf: "u_ee11cbb19052e40b07aac0ca060c23ee_transf__yoljv",
        "speaker-overlay":
          "u_ee11cbb19052e40b07aac0ca060c23ee_speaker-overlay__g0ETb",
        hide: "u_ee11cbb19052e40b07aac0ca060c23ee_hide__9pqWY",
        "speaker-overlay-audio":
          "u_ee11cbb19052e40b07aac0ca060c23ee_speaker-overlay-audio__8Jwen",
        "speaker-overlay-audio-vid":
          "u_ee11cbb19052e40b07aac0ca060c23ee_speaker-overlay-audio-vid__nqJs8",
        "premium-enter":
          "u_ee11cbb19052e40b07aac0ca060c23ee_premium-enter__XaMIn",
        "d-b": "u_ee11cbb19052e40b07aac0ca060c23ee_d-b__xDco5",
        bg: "u_ee11cbb19052e40b07aac0ca060c23ee_bg__RzOPk",
        vid: "u_ee11cbb19052e40b07aac0ca060c23ee_vid__t0x_r",
        "views-counter":
          "u_ee11cbb19052e40b07aac0ca060c23ee_views-counter__buLpv",
        av: "u_ee11cbb19052e40b07aac0ca060c23ee_av__eZSIa",
        "container-user":
          "u_ee11cbb19052e40b07aac0ca060c23ee_container-user__XhTIl",
        centered: "u_ee11cbb19052e40b07aac0ca060c23ee_centered__S0B9H",
        pat: "u_ee11cbb19052e40b07aac0ca060c23ee_pat__WxcD1",
        "badge-container-below":
          "u_ee11cbb19052e40b07aac0ca060c23ee_badge-container-below__sJklq",
        verified: "u_ee11cbb19052e40b07aac0ca060c23ee_verified__Nn4KO",
        server_booster:
          "u_ee11cbb19052e40b07aac0ca060c23ee_server_booster__xjMEq",
        premium: "u_ee11cbb19052e40b07aac0ca060c23ee_premium__f_LQ8",
        staff: "u_ee11cbb19052e40b07aac0ca060c23ee_staff___uje8",
        og: "u_ee11cbb19052e40b07aac0ca060c23ee_og__9C8k1",
        donor: "u_ee11cbb19052e40b07aac0ca060c23ee_donor__RzK2z",
        "view-A": "u_ee11cbb19052e40b07aac0ca060c23ee_view-A__Bh2UJ",
        "m-95": "u_ee11cbb19052e40b07aac0ca060c23ee_m-95__htzJe",
        "m-1": "u_ee11cbb19052e40b07aac0ca060c23ee_m-1__DnFNr",
        inv: "u_ee11cbb19052e40b07aac0ca060c23ee_inv__DHkC3",
        "lg-g": "u_ee11cbb19052e40b07aac0ca060c23ee_lg-g__BZbAY",
        snowflake: "u_ee11cbb19052e40b07aac0ca060c23ee_snowflake__laBXW",
        "snowflakes-fall":
          "u_ee11cbb19052e40b07aac0ca060c23ee_snowflakes-fall__mkQ59",
        "snowflakes-shake":
          "u_ee11cbb19052e40b07aac0ca060c23ee_snowflakes-shake__gRs0h",
        tt: "u_ee11cbb19052e40b07aac0ca060c23ee_tt__XZe_8",
        arr: "u_ee11cbb19052e40b07aac0ca060c23ee_arr__CLEvT",
        pfp: "u_ee11cbb19052e40b07aac0ca060c23ee_pfp__9qePL",
        left: "u_ee11cbb19052e40b07aac0ca060c23ee_left__qFss0",
        dnd: "u_ee11cbb19052e40b07aac0ca060c23ee_dnd__q0R0h",
        online: "u_ee11cbb19052e40b07aac0ca060c23ee_online__YJM9y",
        offline: "u_ee11cbb19052e40b07aac0ca060c23ee_offline__AGrkW",
        idle: "u_ee11cbb19052e40b07aac0ca060c23ee_idle__YYWwY",
        cover: "u_ee11cbb19052e40b07aac0ca060c23ee_cover__z3OEk",
        emoji: "u_ee11cbb19052e40b07aac0ca060c23ee_emoji__J40L7",
        unknown_game: "u_ee11cbb19052e40b07aac0ca060c23ee_unknown_game__MEYTU",
        info_invalid: "u_ee11cbb19052e40b07aac0ca060c23ee_info_invalid__5ROmH",
        ani: "u_ee11cbb19052e40b07aac0ca060c23ee_ani__yzjYs",
        fade: "u_ee11cbb19052e40b07aac0ca060c23ee_fade__JuSlk",
      };
    },
  },
  function (e) {
    e.O(0, [978, 924, 13, 774, 888, 179], function () {
      return e((e.s = 530));
    }),
      (_N_E = e.O());
  },
]);
