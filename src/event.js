MD5 = function (e) {
  function h(a, b) {
    var c, d, e, f, g;
    e = a & 2147483648;
    f = b & 2147483648;
    c = a & 1073741824;
    d = b & 1073741824;
    g = (a & 1073741823) + (b & 1073741823);
    return c & d
      ? g ^ 2147483648 ^ e ^ f
      : c | d
      ? g & 1073741824
        ? g ^ 3221225472 ^ e ^ f
        : g ^ 1073741824 ^ e ^ f
      : g ^ e ^ f;
  }

  function k(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & c) | (~b & d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function l(a, b, c, d, e, f, g) {
    a = h(a, h(h((b & d) | (c & ~d), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function m(a, b, d, c, e, f, g) {
    a = h(a, h(h(b ^ d ^ c, e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function n(a, b, d, c, e, f, g) {
    a = h(a, h(h(d ^ (b | ~c), e), g));
    return h((a << f) | (a >>> (32 - f)), b);
  }

  function p(a) {
    var b = "",
      d = "",
      c;
    for (c = 0; 3 >= c; c++)
      (d = (a >>> (8 * c)) & 255),
        (d = "0" + d.toString(16)),
        (b += d.substr(d.length - 2, 2));
    return b;
  }
  var f = [],
    q,
    r,
    s,
    t,
    a,
    b,
    c,
    d;
  e = (function (a) {
    a = a.replace(/\r\n/g, "\n");
    for (var b = "", d = 0; d < a.length; d++) {
      var c = a.charCodeAt(d);
      128 > c
        ? (b += String.fromCharCode(c))
        : (127 < c && 2048 > c
            ? (b += String.fromCharCode((c >> 6) | 192))
            : ((b += String.fromCharCode((c >> 12) | 224)),
              (b += String.fromCharCode(((c >> 6) & 63) | 128))),
          (b += String.fromCharCode((c & 63) | 128)));
    }
    return b;
  })(e);
  f = (function (b) {
    var a,
      c = b.length;
    a = c + 8;
    for (
      var d = 16 * ((a - (a % 64)) / 64 + 1), e = Array(d - 1), f = 0, g = 0;
      g < c;

    )
      (a = (g - (g % 4)) / 4),
        (f = (g % 4) * 8),
        (e[a] |= b.charCodeAt(g) << f),
        g++;
    a = (g - (g % 4)) / 4;
    e[a] |= 128 << ((g % 4) * 8);
    e[d - 2] = c << 3;
    e[d - 1] = c >>> 29;
    return e;
  })(e);
  a = 1732584193;
  b = 4023233417;
  c = 2562383102;
  d = 271733878;
  for (e = 0; e < f.length; e += 16)
    (q = a),
      (r = b),
      (s = c),
      (t = d),
      (a = k(a, b, c, d, f[e + 0], 7, 3614090360)),
      (d = k(d, a, b, c, f[e + 1], 12, 3905402710)),
      (c = k(c, d, a, b, f[e + 2], 17, 606105819)),
      (b = k(b, c, d, a, f[e + 3], 22, 3250441966)),
      (a = k(a, b, c, d, f[e + 4], 7, 4118548399)),
      (d = k(d, a, b, c, f[e + 5], 12, 1200080426)),
      (c = k(c, d, a, b, f[e + 6], 17, 2821735955)),
      (b = k(b, c, d, a, f[e + 7], 22, 4249261313)),
      (a = k(a, b, c, d, f[e + 8], 7, 1770035416)),
      (d = k(d, a, b, c, f[e + 9], 12, 2336552879)),
      (c = k(c, d, a, b, f[e + 10], 17, 4294925233)),
      (b = k(b, c, d, a, f[e + 11], 22, 2304563134)),
      (a = k(a, b, c, d, f[e + 12], 7, 1804603682)),
      (d = k(d, a, b, c, f[e + 13], 12, 4254626195)),
      (c = k(c, d, a, b, f[e + 14], 17, 2792965006)),
      (b = k(b, c, d, a, f[e + 15], 22, 1236535329)),
      (a = l(a, b, c, d, f[e + 1], 5, 4129170786)),
      (d = l(d, a, b, c, f[e + 6], 9, 3225465664)),
      (c = l(c, d, a, b, f[e + 11], 14, 643717713)),
      (b = l(b, c, d, a, f[e + 0], 20, 3921069994)),
      (a = l(a, b, c, d, f[e + 5], 5, 3593408605)),
      (d = l(d, a, b, c, f[e + 10], 9, 38016083)),
      (c = l(c, d, a, b, f[e + 15], 14, 3634488961)),
      (b = l(b, c, d, a, f[e + 4], 20, 3889429448)),
      (a = l(a, b, c, d, f[e + 9], 5, 568446438)),
      (d = l(d, a, b, c, f[e + 14], 9, 3275163606)),
      (c = l(c, d, a, b, f[e + 3], 14, 4107603335)),
      (b = l(b, c, d, a, f[e + 8], 20, 1163531501)),
      (a = l(a, b, c, d, f[e + 13], 5, 2850285829)),
      (d = l(d, a, b, c, f[e + 2], 9, 4243563512)),
      (c = l(c, d, a, b, f[e + 7], 14, 1735328473)),
      (b = l(b, c, d, a, f[e + 12], 20, 2368359562)),
      (a = m(a, b, c, d, f[e + 5], 4, 4294588738)),
      (d = m(d, a, b, c, f[e + 8], 11, 2272392833)),
      (c = m(c, d, a, b, f[e + 11], 16, 1839030562)),
      (b = m(b, c, d, a, f[e + 14], 23, 4259657740)),
      (a = m(a, b, c, d, f[e + 1], 4, 2763975236)),
      (d = m(d, a, b, c, f[e + 4], 11, 1272893353)),
      (c = m(c, d, a, b, f[e + 7], 16, 4139469664)),
      (b = m(b, c, d, a, f[e + 10], 23, 3200236656)),
      (a = m(a, b, c, d, f[e + 13], 4, 681279174)),
      (d = m(d, a, b, c, f[e + 0], 11, 3936430074)),
      (c = m(c, d, a, b, f[e + 3], 16, 3572445317)),
      (b = m(b, c, d, a, f[e + 6], 23, 76029189)),
      (a = m(a, b, c, d, f[e + 9], 4, 3654602809)),
      (d = m(d, a, b, c, f[e + 12], 11, 3873151461)),
      (c = m(c, d, a, b, f[e + 15], 16, 530742520)),
      (b = m(b, c, d, a, f[e + 2], 23, 3299628645)),
      (a = n(a, b, c, d, f[e + 0], 6, 4096336452)),
      (d = n(d, a, b, c, f[e + 7], 10, 1126891415)),
      (c = n(c, d, a, b, f[e + 14], 15, 2878612391)),
      (b = n(b, c, d, a, f[e + 5], 21, 4237533241)),
      (a = n(a, b, c, d, f[e + 12], 6, 1700485571)),
      (d = n(d, a, b, c, f[e + 3], 10, 2399980690)),
      (c = n(c, d, a, b, f[e + 10], 15, 4293915773)),
      (b = n(b, c, d, a, f[e + 1], 21, 2240044497)),
      (a = n(a, b, c, d, f[e + 8], 6, 1873313359)),
      (d = n(d, a, b, c, f[e + 15], 10, 4264355552)),
      (c = n(c, d, a, b, f[e + 6], 15, 2734768916)),
      (b = n(b, c, d, a, f[e + 13], 21, 1309151649)),
      (a = n(a, b, c, d, f[e + 4], 6, 4149444226)),
      (d = n(d, a, b, c, f[e + 11], 10, 3174756917)),
      (c = n(c, d, a, b, f[e + 2], 15, 718787259)),
      (b = n(b, c, d, a, f[e + 9], 21, 3951481745)),
      (a = h(a, q)),
      (b = h(b, r)),
      (c = h(c, s)),
      (d = h(d, t));
  return (p(a) + p(b) + p(c) + p(d)).toLowerCase();
};

const addText = (text) => {
  let main = document.querySelector(".main");
  var h = document.createElement("H2");
  var t = document.createTextNode(text);
  h.appendChild(t);
  main.appendChild(h);
};

const titleCase = (str) => {
  str = str.split(/[ ._]+/)
  for (var i = 0; i < str.length; i++) {
    if(str[i].length > 2) {
      str[i] = str[i].toLowerCase().charAt(0).toUpperCase() + str[i].slice(1).toLowerCase(); 
    }
  }
  return str.join(' ');
}

const generateRagamPDF = async (name, college, position, event, category, eventName) => {
  let main = document.querySelector(".main");

  certificate =
  category === "Ragnarok"
      ? await fetch("./certificates/cert-data/ragnarok.json").then((res) => {
          return res.json();
        })
      : await fetch("./certificates/cert-data/events.json").then((res) => {
          return res.json();
        });

  const { PDFDocument, rgb } = PDFLib;

  const exBytes =
    category === "Ragnarok"
      ? await fetch("./certificates/cert-pdf/ragnarok.pdf").then((res) => {
          return res.arrayBuffer();
        })
      : await fetch("./certificates/cert-pdf/events.pdf").then((res) => {
          return res.arrayBuffer();
        });

  const exFont = await fetch("./fonts/" + certificate.name.fontName).then(
    (res) => {
      return res.arrayBuffer();
    }
  );

  const exFontSub = await fetch(
    "./fonts/" + certificate.paragraph.fontName
  ).then((res) => {
    return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);

  pdfDoc.registerFontkit(fontkit);
  const myFont = await pdfDoc.embedFont(exFont);
  const myFontSub = await pdfDoc.embedFont(exFontSub);

  const pages = pdfDoc.getPages();
  const firstPg = pages[0];

  var positionDict = {
    First: "1st",
    Second: "2nd",
    Third: "3rd",
  };

  if (name != null) {
    name = name.trim();
    name = titleCase(name);

    firstPg.drawText(name, {
      size: certificate.name.fontSize,
      x: certificate.name.x - 0.2 * certificate.name.fontSize * name.length - (eventName === "ragnarok" && name.length>10 ? name.length * 3: 0),
      y: certificate.name.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFont,
    });
  }

  if (college != null) {
    college = college.trim();

    firstPg.drawText("of " + college + ",", {
      size: certificate.paragraph.fontSize,
      x: certificate.organisation.x - college.length * 0.22 * certificate.paragraph.fontSize,
      y: certificate.organisation.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFontSub,
    });
  }

  if (position != null) {
    firstPg.drawText(positionDict[position], {
      size: certificate.paragraph.fontSize,
      x: certificate.position.x,
      y: certificate.position.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFontSub,
    });
  }

  if (event != null) {
    event = event.replace("(H)", "(Hindi)");
    event = event.replace("(T)", "(Telugu)");
    event = event.replace("(M)", "(Malayalam)");
    event = event.replace("(E)", "(English)");
    event = event.replace(/\([A-Z]*\)/, "").trim();
    firstPg.drawText(event, {
      size: certificate.paragraph.fontSize,
      x: certificate.event.x - event.length * 0.22 * certificate.paragraph.fontSize,
      y: certificate.event.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFontSub,
    });
  }

  var qr = new QRious({
      value: window.location.href,
      foreground: certificate.qrCode.foreground,
      background: certificate.qrCode.background

  })
  qr = qr.toDataURL();
  const qrImage = await pdfDoc.embedPng(qr)

  firstPg.drawImage(qrImage, {
    x: certificate.qrCode.x,
    y: certificate.qrCode.y,
    width: 100,
    height: 100,
  })

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });

  var h = document.createElement("H2");
  var t = document.createTextNode(event + " Certificate");
  h.appendChild(t);
  main.removeChild(main.lastElementChild);
  main.appendChild(h);
  var elem = document.createElement("img");
  elem.setAttribute("src", "./static/img/download-icon.png");
  elem.setAttribute("id", "download-button");
  elem.setAttribute("height", "40");
  elem.setAttribute("width", "40");
  var anchor = document.createElement("a");
  anchor.href = uri;
  anchor.download = event + " Certificate.pdf";
  anchor.appendChild(elem);
  main.appendChild(anchor);
  var enter = document.createElement("br");
  main.appendChild(enter);
};

const checkRagamUser = async (ragamID) => {

  let main = document.querySelector('.main');
  main.innerHTML = '';

  try {
      user = await fetch("./ragam-users/" + MD5(ragamID) + ".json").then((res) => {
          return res.json();
      });
  }
  catch(e) {
      addText("User not found");
      return null;
  }
  return user;
}

const checkCAUser = async (caID) => {

  let main = document.querySelector('.main');
  main.innerHTML = '';

  try {
      user = await fetch("./ragam-ca/" + MD5(caID) + ".json").then((res) => {
          return res.json();
      });
  }
  catch(e) {
      addText("User not found");
      return null;
  }
  return user;
}

const generateCAPDF = async (name, college, position) => {
  let main = document.querySelector(".main");

  certificate =
  user.position <= 30 
      ? await fetch("./certificates/cert-data/ca-excellence.json").then((res) => {
          return res.json();
        })
      : await fetch("./certificates/cert-data/ca-participation.json").then((res) => {
          return res.json();
        });

  const { PDFDocument, rgb } = PDFLib;
  const exBytes =
  user.position <= 30
      ? await fetch("./certificates/cert-pdf/ca-excellence.pdf").then((res) => {
          return res.arrayBuffer();
        })
      : await fetch("./certificates/cert-pdf/ca-participation.pdf").then((res) => {
          return res.arrayBuffer();
        });

  const exFont = await fetch("./fonts/" + certificate.name.fontName).then(
    (res) => {
      return res.arrayBuffer();
    }
  );

  const exFontSub = await fetch(
    "./fonts/" + certificate.paragraph.fontName
  ).then((res) => {
    return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);

  pdfDoc.registerFontkit(fontkit);
  const myFont = await pdfDoc.embedFont(exFont);
  const myFontSub = await pdfDoc.embedFont(exFontSub);

  const pages = pdfDoc.getPages();
  const firstPg = pages[0];

  var positionDict = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th",
    11: "11th",
    12: "12th",
    13: "13th",
    14: "14th",
    15: "15th",
    16: "16th",
    17: "17th",
    18: "18th",
    19: "19th",
    20: "20th",
    21: "21st",
    22: "22nd",
    23: "23rd",
    24: "24th",
    25: "25th",
    26: "26th",
    27: "27th",
    28: "28th",
    29: "29th",
    30: "30th",
  };

  if (name != null) {
    name = name.trim();
    name = titleCase(name);
    console.log(name);

    firstPg.drawText(name, {
      size: certificate.name.fontSize,
      x: certificate.name.x - 0.2 * certificate.name.fontSize * name.length,
      y: certificate.name.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFont,
    });
  }
  
  if (college != null) {
    college = college.trim();

    firstPg.drawText("of " + college + ",", {
      size: certificate.paragraph.fontSize,
      x: certificate.organisation.x - (college.length+3) * 0.22 * certificate.paragraph.fontSize,
      y: certificate.organisation.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFontSub,
    });
  }

  if (position <= 30) {
    firstPg.drawText(positionDict[position], {
      size: certificate.paragraph.fontSize,
      x: certificate.position.x,
      y: certificate.position.y,
      color: rgb(
        certificate.paragraph.fontColor.r,
        certificate.paragraph.fontColor.g,
        certificate.paragraph.fontColor.b
      ),
      font: myFontSub,
    });
  }

  var qr = new QRious({
      value: window.location.href,
      foreground: certificate.qrCode.foreground,
      background: certificate.qrCode.background

  })
  qr = qr.toDataURL();
  const qrImage = await pdfDoc.embedPng(qr)

  firstPg.drawImage(qrImage, {
    x: certificate.qrCode.x,
    y: certificate.qrCode.y,
    width: 100,
    height: 100,
  })

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });

  var h = document.createElement("H2");
  var t = document.createTextNode("Campus Ambassador Certificate");
  h.appendChild(t);
  main.removeChild(main.lastElementChild);
  main.appendChild(h);
  var elem = document.createElement("img");
  elem.setAttribute("src", "./static/img/download-icon.png");
  elem.setAttribute("id", "download-button");
  elem.setAttribute("height", "40");
  elem.setAttribute("width", "40");
  var anchor = document.createElement("a");
  anchor.href = uri;
  anchor.download = "Campus Ambassador Certificate.pdf";
  anchor.appendChild(elem);
  main.appendChild(anchor);
  var enter = document.createElement("br");
  main.appendChild(enter);
};


window.onload = (e) => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const category = urlParams.get("category");
  const name = urlParams.get("event");
  if(category === "ragam21") {
    const user = checkRagamUser(id).then((user) => {
      if (user) {
        let main = document.querySelector(".main");
        var h1 = document.createElement("H2");
        var t1 = document.createTextNode("Loading your Certificate");
        h1.appendChild(t1);
        main.appendChild(h1);
        for (i = 0; i < user.length; i++) {
          for (j = 0; j < user[i].events.length; j++) {
            if (user[i].events[j].name.replace(/ /g, "").toLowerCase() === name) {
              if (user[i].events[j].hasCertificate) {
                generateRagamPDF(
                  user[i].name,
                  user[i].college,
                  user[i].events[j].status,
                  user[i].events[j].name,
                  user[i].events[j].category,
                  name
                );
              } else {
                main.removeChild(main.lastElementChild);
                addText("No Certificate for " + user[i].events[j].name);
              }
            }
          }
          if (j === 0) {
            main.removeChild(main.lastElementChild);
            addText("No Certificates Available");
          }
        }
      }
    })
  }
  else if(category === "ca21") {
    const user = checkCAUser(id).then((user) => {
      if (user) {
        if(user.position == -1 || user.position > 50) {
          addText("No Certificate Available");
        }
        else {
          let main = document.querySelector(".main");
          var h1 = document.createElement("H2");
          var t1 = document.createTextNode("Loading your Certificate");
          h1.appendChild(t1);
          main.appendChild(h1);
          generateCAPDF(user.name, user.college, user.position);
        }
      }
    }
  )};
};
