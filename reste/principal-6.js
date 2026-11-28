const ANL = [
  ["lune", "", "Elle éclaire la nuit."],
  ["nuit unit", "", "Deux mots, mêmes lettres."],
  ["ange nage", "gena", "Deux mots, mêmes lettres."],
  ["ciel lice", "", "Deux mots, mêmes lettres."],
  ["soir rois", "rosi", "Deux mots, mêmes lettres."],
  ["miel lime", "mile", "Deux mots, mêmes lettres."],
  ["lion loin", "lino", "Deux mots, mêmes lettres."],
  ["lait", "lita liat", "On le boit tiède avant de dormir."],
  ["luge", "", "Elle glisse sur la neige."],
  ["fête", "", "On la célèbre en décembre."],
  ["givre", "grive", "Il blanchit la vitre au petit matin."],
  ["pluie", "", "Elle tape doucement sur le toit."],
  ["neige génie", "ignee", "Deux mots, mêmes lettres."],
  ["laine liane", "enlia", "Deux mots, mêmes lettres."],
  ["bruit tribu", "", "Deux mots, mêmes lettres."],
  ["rêver verre", "", "Deux mots, mêmes lettres."],
  ["sapin", "pains pians", "Il se pare de guirlandes."],
  ["douce coude", "", "Deux mots, mêmes lettres."],
  ["poule loupe", "", "Deux mots, mêmes lettres."],
  ["poire proie", "", "Deux mots, mêmes lettres."],
  ["monde démon", "", "Deux mots, mêmes lettres."],
  ["épice pièce", "", "Deux mots, mêmes lettres."],
  ["coupe pouce", "", "Deux mots, mêmes lettres."],
  ["train riant", "nitra tarin", "Deux mots, mêmes lettres."],
  ["lampe palme ample", "", "Trois mots, mêmes lettres."],
  ["repos poser prose", "pores spore", "Trois mots, mêmes lettres."],
  ["voile olive viole", "", "Trois mots, mêmes lettres."],
  ["entre rente terne", "enter reent", "Trois mots, mêmes lettres."],
  ["étang agent géant", "gante genat", "Trois mots, mêmes lettres."],
  ["carte trace écart acter", "creat cerat recta terca", "Quatre mots, mêmes lettres."],
  ["bougie", "", "Elle éclaire la table à la veillée."],
  ["flocon", "", "Il tombe en silence du ciel."],
  ["étoile", "toilee etiole", "Elle veille dans la nuit."],
  ["repose opères", "", "Deux mots, mêmes lettres."],
  ["braise baiser", "bisera braies", "Deux mots, mêmes lettres."],
  ["cadeau audace", "", "Deux mots, mêmes lettres."],
  ["rivage virage", "gravie grevai vaigre viager", "Deux mots, mêmes lettres."],
  ["secret certes crêtes", "terces", "Trois mots, mêmes lettres."],
  ["merise remise misère", "mirees rimees emeris", "Trois mots, mêmes lettres."],
  ["tisane sainte", "entais niates satine tanise tenais tenias etains", "Deux mots, mêmes lettres."],
  ["silence", "", "Il enveloppe la forêt enneigée."],
  ["écharpe", "pechera rechape repecha", "Elle entoure le cou quand il neige."],
  ["lumière", "meulier", "Elle éclaire sans bruit."],
  ["traîneau", "auraient", "Il glisse sur la neige."],
  ["cheminée", "", "Elle crépite quand il fait froid."],
  ["bonhomme", "", "Il a un nez en carotte."],
].map(([e, t, a]) => ({ W: e.split(" "), X: new Set(t.split(" ").filter(Boolean).map(nk)), c: a }));
function pAna(e) {
  const t = ANL[lv],
    a = t.W.map((e) => ({ w: e, k: nk(e) })),
    s = a[0].k.length,
    n = new Set(a.map((e) => e.k)),
    o = rng(2654435761 * (lv + 7)),
    i = [...a[0].k];
  let r;
  for (let e = 0; e < 40; e++) {
    const e = i.slice();
    for (let t = e.length - 1; t > 0; t--) {
      const a = Math.floor(o() * (t + 1));
      [e[t], e[a]] = [e[a], e[t]];
    }
    if (((r = e.join("")), !n.has(r))) break;
  }
  let l = e ? e.got.filter((e) => e < a.length) : [],
    c = e ? e.rev : {},
    d = e && e.bn ? e.bn : [],
    f = [...r].map((e, t) => t),
    u = [],
    h = !1,
    p = null;
  snap = () => ({ got: l, rev: c, bn: d });
  const m = () => a.every((e, t) => l.includes(t)),
    b = () => {
      const e = $("#rw");
      (e.style.setProperty("--t", s <= 4 ? "38px" : s <= 6 ? "32px" : "28px"),
        (e.innerHTML = a
          .map(
            (e, t) =>
              `<div class="w">${[...e.k]
                .map((a, s) => {
                  const n = l.includes(t) || s < (c[t] || 0);
                  return `<i class="${n ? "on" : ""}">${n ? e.w[s].toUpperCase() : ""}</i>`;
                })
                .join("")}</div>`,
          )
          .join("")));
    };
  frame(
    `<p class="ac">${t.c}</p><div class="rw" id="rw"></div><div class="pv" id="pv"></div><div class="whw"><button class="shf" data-a="shuf" aria-label="Mélanger les lettres" title="Mélanger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg></button><div class="whl" id="whl"><svg viewBox="0 0 100 100"><polyline id="ln" points=""/></svg>${[...r].map((e) => `<b>${e}</b>`).join("")}</div></div>`,
    1,
  );
  const g = $("#whl"),
    E = [...g.querySelectorAll("b")],
    y = [],
    v = () =>
      f.forEach((e, t) => {
        const a = -Math.PI / 2 + (2 * t * Math.PI) / s;
        ((y[e] = [50 + 35 * Math.cos(a), 50 + 35 * Math.sin(a)]),
          (E[e].style.left = y[e][0] + "%"),
          (E[e].style.top = y[e][1] + "%"));
      }),
    A = () => {
      (E.forEach((e, t) => e.classList.toggle("s", u.includes(t))),
        ($("#pv").textContent = u.map((e) => r[e]).join("")));
      const e = u.map((e) => y[e].join(","));
      (h && p && u.length && e.push(p.join(",")), $("#ln").setAttribute("points", e.join(" ")));
    },
    S = (e) => {
      const t = g.getBoundingClientRect(),
        a = ((e.clientX - t.left) / t.width) * 100,
        n = ((e.clientY - t.top) / t.height) * 100;
      p = [a, n];
      for (let e = 0; e < s; e++)
        if (Math.hypot(a - y[e][0], n - y[e][1]) < 10) {
          const t = u.indexOf(e);
          t < 0 ? u.push(e) : t === u.length - 2 && u.pop();
          break;
        }
      A();
    };
  (g.addEventListener("pointerdown", (e) => {
    ((h = !0), (u = []));
    try {
      g.setPointerCapture(e.pointerId);
    } catch (e) {}
    (S(e), e.preventDefault());
  }),
    g.addEventListener("pointermove", (e) => {
      h && S(e);
    }));
  const x = () => {
    h &&
      ((h = !1),
      (() => {
        const e = u.map((e) => r[e]).join("");
        if (!e) return;
        if (e.length < s) return e.length < 3 ? 0 : msg("Il faut utiliser toutes les lettres");
        const n = a.findIndex((t) => t.k === e);
        if (n >= 0) {
          if (l.includes(n)) return msg("Déjà trouvé");
          (l.push(n), sfx(660, 0.4), vib(15), b(), msg("✦ " + a[n].w), sv(), m() && setTimeout(win, 900));
        } else if (t.X.has(e) || GW.has(e)) {
          if (d.includes(e)) return msg("Déjà trouvé");
          (d.push(e), fl++, st.set("fl", fl), chip(), sv(), msg("Mot bonus · +1 🫧"));
        } else msg("Ce mot dort encore…");
      })(),
      (u = []),
      A());
  };
  (g.addEventListener("pointerup", x),
    g.addEventListener("pointercancel", x),
    g.addEventListener("contextmenu", (e) => e.preventDefault()),
    (act.shuf = () => {
      (f.sort(() => Math.random() - 0.5), v(), (u = []), A());
    }),
    (act.hint = () => {
      const e = a.map((e, t) => t).filter((e) => !l.includes(e));
      if (!e.length || !spend(1)) return;
      const t = e[(Math.random() * e.length) | 0];
      ((c[t] = (c[t] || 0) + 1), c[t] >= a[t].k.length && l.push(t), b(), sv(), m() && setTimeout(win, 900));
    }),
    v(),
    b(),
    A());
}
const ANL2 = [
  "BRUME|3|7|brume,1,0,h;rue,0,2,v;mer,0,4,v;mur,0,4,h|BER BEUR BRE BRU BUE BURE EMU MEU MEUR MUE MUER MURE UMR",
  "FROID|5|5|froid,2,0,h;ordi,0,4,v;roi,1,2,v;foi,2,0,v|DIF DIO DIR DOI DOR IDF IRD OIF ORI RDI RFI RFID RIF",
  "PISTE|5|5|piste,3,0,h;site,0,4,v;sept,1,0,v;est,2,2,v;tes,0,2,h|EPI EPIS ESTI ETI ETS IEP IES IST PEI PES PISE PSE PTI PTS SEI SIE SPE SPI STI STP TPE TPS TSE",
  "TARTE|4|5|tarte,0,0,h;état,0,4,v;raté,0,2,v;art,2,0,h|ATR ATT ETA RAT REA RTE RTT TATE TATER TET TRA TTE",
  "LUTIN|5|7|lutin,2,0,h;nuit,1,1,v;lui,0,3,v;lit,0,3,h;nul,2,4,v;uni,3,4,h|IUT LIN LUN LUT NIL NUI TUI UIT",
  "VESTE|4|6|veste,0,1,h;êtes,0,2,v;est,0,5,v;été,2,0,h;tes,1,0,v|EES ESTE ETS EVE SETE SEVE SVT TEE TSE VES",
  "PLAGE|4|7|plage,3,2,h;page,0,6,v;égal,0,3,v;pâle,0,0,h;âge,0,1,v|ALPE ELA GEA GEL GPA GPL LEP PAG PEL PLA",
  "CADEAU|6|6|cadeau,2,0,h;audace,0,2,v;déçu,4,0,h;eau,1,4,v;duc,0,0,v|ADE AEC CAA CAD CADE CAE CDU CEA CEDA DAC DEU DUE ECU UDC",
  "SOLEIL|7|6|soleil,2,0,h;isolé,1,0,v;lois,2,2,v;oeil,0,4,v;soie,5,2,h;les,4,5,v|ELIO ELO ELOI ELS ESO IES ILE ILES ILS IOS ISO LEI LEL LIE LIES LIO LIS LISLE LLS LOI OIE OIES OIS OLE OLI OSE OSI SEI SEL SIE SIL SILO SOI SOL SOLI",
  "BOUGIE|6|7|bougie,2,1,h;bouge,0,3,v;boue,2,1,v;ouïe,4,0,h;oui,0,5,v;bio,0,3,h|BEI BIE BOGUE BUE GIE GIO GOBE GUE GUI OBEI OIE OUE UBI UGO",
  "OURSE|8|6|ourse,7,1,h;euros,3,4,v;soeur,4,1,h;roues,0,1,v;rose,0,1,h;rues,2,0,h|EROS ESO ESR EURO EUS ORES ORS OSE OSER OUE OURS OUS RES REUS ROU ROUE RSE RUE RUS RUSE SER SEU SOR SOU SUER SUR SURE URS USE",
  "RIDEAU|8|7|rideau,5,0,h;aider,3,2,v;adieu,3,2,h;raide,7,2,h;dire,3,0,v;aide,0,5,v;dira,0,2,h|ADE ADI ADR AID AIE AIR AIRE ARDU ARDUE ARI ARIDE ARU AUDI AURE DAR DEI DEIR DEU DIE DIR DIU DRU DUE DUR DURA DURE EAU EDI IAE IDE IRD IRE RADE RADIE RAID RAIE RDA RDI REA REDA REI RIA RIAD RIE RUDI RUE RUI UDI",
  "MOUFLE|8|7|moufle,5,0,h;foule,3,2,v;moule,2,4,v;floue,3,2,h;fume,3,0,v;loué,0,6,v;feu,7,1,h|ELO ELU EMU FEM FLE FLO FLOU FLUO FOL FOU LEM LEU LOM LOME LUE MEL MELO MEU MLE MOL MOLE MOU MOUE MUE MULE OEUF OLE OUE OUM ULM",
  "NEIGE|5|5|neige,0,0,h;génie,0,3,v;gêne,4,0,h;née,0,0,v|EEN EINE ENGIE ENI GIE GIEN IEN IGN INE NIE",
  "CONTE|7|7|conte,4,0,h;côté,2,3,v;note,3,1,v;cent,2,3,h;cône,0,5,v;net,6,0,h|CEN CNE CNT COE COEN COT CTE ECT ENC ENT EON NEC NOCE ONT OTE TCE TEC TOC TON",
  "TISANE|7|6|tisane,6,0,h;sainte,1,5,v;tenais,1,0,h;saint,0,3,v;étais,0,0,v|AES AIE AIES AIN AINE AINES AINS AIS AISE AISNE ANE ANES ANIS ANS ANSE ANTI ASE ASI ASIE ASN ASTI EAN ENA ENI ENS ENT ESA EST ESTA ESTI ETA ETAI ETAIN ETI ETNA ETS IAE IEN IENA IES INE INSA INTE IST ITA NAIS NAIT NAS NAT NES NET NETS NIE NIES NIET NIS NSA SAIN SAINE SAIT SAN SANT SANTE SANTI SATIN SEI SENT SENTI SIA SIE SIEN SINE SINT SITA SITE SNA STAN STI TAIS TAISE TAS TES TIAN TIEN TIENS TNS TSE",
  "HIVER|7|5|hiver,3,0,h;hier,3,0,v;rive,3,4,v;viré,3,2,v;ivre,0,3,v;vie,0,2,h|IRE REI RIE VER VIER VIH VIR",
  "SOIREE|5|7|soirée,3,1,h;série,0,3,v;soir,0,3,h;rose,0,6,v;rois,0,1,v;soie,1,0,h|EES ERE EROS ESO ESR IES IOS IRE ISO ISR OIE OIES OIS OREE ORES ORI ORS OSE OSEE OSER OSI OSIER REI REIS RES RIE RIES RIOS RIS RISEE ROI ROSEE RSE RSI SEI SER SIE SIRE SOI SOR",
  "TASSE|5|5|tasse,2,0,h;est,2,4,v;ses,2,2,v;tes,2,0,v;tas,0,3,v|AES ASE ASSE ESA ESS ESTA ETA ETS SAS SEST STASE TASS TESSA TSE TSS",
  "REVES|5|5|rêves,0,0,h;versé,0,2,v;vers,2,0,h;rêve,0,0,v;ère,4,2,h|EES ESR EVE RES RSE SER SERV SEVE VER VES",
  "ENTRE|5|5|entre,2,0,h;rente,0,1,v;être,4,1,h;été,2,4,v;ère,0,0,h|EEN ENR ENT ENTR EREN NEE NET REN RTE TEE TERNE",
  "CHALET|9|6|chalet,3,0,h;tâche,0,1,v;lâche,1,0,h;éclat,3,4,v;halte,7,1,h;cela,5,2,h;chat,5,2,v|ACH ACTE AEC ATH CAE CALE CATE CATH CEA CEL CELTA CETA CHALE CHATEL CHE CLA CLE CTE ECT ELA ETA ETAL HAC HAL HATE HEC HET HTC LAC LACET LAH LAT LECH LHC TAC TACLE TAL TALC TCE TCL TEC TEL THE THEA TLE",
  "PATINS|8|8|patins,4,2,h;saint,0,4,v;tapis,0,7,v;sapin,2,1,h;pains,0,0,h;anti,4,3,v;pain,7,1,h|AIN AINS AIS ANIS ANS APS ASI ASN ASP ASTI ATP INSA IST ITA NAIS NAIT NAS NAT NIS NPA NSA PAI PAIS PANS PAS PATIN PIA PINA PINS PISA PSA PTAIN PTI PTIN PTS SAIN SAIT SAN SANT SANTI SATIN SIA SINT SITA SNA SPA SPI STAN STI STP TAIS TAS TIAN TNS TPS",
  "POIRE|6|6|poire,1,1,h;proie,1,1,v;pire,4,0,h;prie,0,4,v|EPI EPO EPR ERP IEP IRE OIE ORI PEI PERI PERO PIERO PIO PIR POI POIR POR PRE PRI REI REP RIE ROI",
  "AUTRE|4|6|autre,3,1,h;raté,0,5,v;eau,1,2,v;rue,1,0,h;art,0,0,v|ARU ATR AURE ETA ETAU RAT REA RTE RUT TRA TUA TUERA",
  "NUAGE|4|8|nuage,2,2,h;ange,0,5,v;nage,0,4,h;une,1,2,v;eau,1,0,h;âge,3,0,h|ANE AUGE AUNE EAN ENA EUN GAN GEA GNA GNU GUE GUEN NEU NGA UNA UNG",
  "LUEUR|4|5|lueur,2,0,h;leur,0,3,v;rue,1,1,v;élu,0,2,h|LER LEU LUE RELU RUEL URL",
  "TEMPS|5|5|temps,2,0,h;sept,0,3,v;mets,0,0,h;est,2,1,v;met,0,0,v|ETS MES MST PES PME PSE PTS SEM SMET SPE STM STP TEM TES TPE TPS TSE",
  "MATIN|5|5|matin,2,0,h;main,1,1,v;anti,4,0,h;mai,0,3,v;ami,0,2,h|AIN AMIN AMT ANIM IAM IMA ITA MANI MAT MIA MIN MIT MTN NAIT NAMI NAT NTM TAM TIAN TMA",
  "ASTRE|8|6|astre,2,0,h;resta,0,1,v;ratés,4,0,h;très,0,0,h;sera,4,4,v;sert,6,2,h|AES ARES ARS ART ARTS ASE ASTER ATR ESA ESR EST ESTA ETA ETS RASE RAT RATE RATS REA RES RSA RSE RTE RTS SAR SART SER STAR TARSE TAS TASER TES TRA TSAR TSE TSR",
  "PATIN|4|6|patin,0,1,h;anti,0,2,v;pain,3,0,h;naît,0,5,v|AIN ATP ITA NAT NPA PAI PIA PINA PTAIN PTI PTIN TIAN",
  "DOUCE|5|8|douce,2,0,h;coude,0,2,v;code,0,0,v;déçu,1,4,v;doué,1,4,h;déco,0,7,v|CDU COE COU DEO DEU DOC DOCU DOU DUC DUE DUO ECU EDO OCDE ODE OUD OUE OUED UDC",
  "LOUPS|6|7|loups,1,2,h;pouls,0,3,v;plus,1,5,v;loup,3,3,h;opus,4,0,h;oups,2,1,v|LPO LUS OLP OUS PLU POU PUS SOL SOU SOUL SUL SUP",
  "PERLE|5|5|perle,2,0,h;père,1,4,v;réel,0,1,v;pré,4,2,h;ère,0,0,h|ELE EPR ERP LEP LEPRE LER PEL PELE PELER PERL REP",
  "NUAGES|7|9|nuages,0,3,h;usage,0,4,v;anges,2,4,h;nuage,4,0,h;gens,2,6,v;ange,3,0,v;sage,3,2,v|AES AGE AGES ANE ANES ANS ANSE ANUS ASE ASN AUGE AUNE AUS EAN EAU ENA ENS ESA EUN EUS GAN GEA GES GNA GNU GUE GUEN GUS NAGE NAGES NAS NES NEU NGA NSA NUES SAN SAU SAUGE SEAU SEGA SEU SNA SUA UNA UNE UNES UNG UNS UNSA USE",
  "BONNET|5|8|bonnet,1,2,h;bonne,0,3,v;béton,0,6,v;tonne,3,0,h;bonté,0,0,v;ont,4,5,h|BENTO BON BOT ENT EON NEN NEON NET NON NOTE OTE TON",
  "ORANGE|8|7|orange,6,1,h;organe,2,4,v;orage,4,1,h;nager,0,2,v;rangé,0,0,h;rang,0,0,v|AERO AGE AGRO ANE ANGE ANO ANR ARG ARGO ARGON ARN ARNO ARON EAN ENA ENORA ENR EON ERGO GAN GAO GAR GARE GEA GER GNA GORAN GRA GRE NAGE NAO NGA NOA OGRE ONG ORA ORANG ORGA ORGE RAGE REA REGNA REN RENO ROG ROGNE RONA RONGE",
  "GIVRE|5|7|givre,2,1,h;rive,1,2,v;viré,0,4,v;ivre,0,3,h;vie,4,0,h|GER GIE GRE GRI IRE IVG REGI REI RIE VER VIER VIR",
  "ETOILE|7|8|étoile,1,0,h;toile,0,2,v;élite,1,0,v;télé,0,5,v;oeil,3,4,h;liée,3,7,v;tôle,5,4,h|ELE ELIO ELIT ELO ELOI ETE ETI ILE ILOT ITELE LEI LETO LIE LIO LIT LOI LOTI OIE OIT OLE OLI OTE TEE TEL TLE TOI",
  "EPICES|7|6|épices,5,0,h;pièces,0,5,v;pièce,1,0,v;pèse,1,0,h;scie,3,2,v;sec,0,3,v|CEE CEI CEP CESE CIP CSI CSP EES EPCI EPI EPIC EPICE EPIS ESC IEP IES PEC PEI PES PIC PISE PSE SCPI SEI SIC SIE SPE SPI",
  "TRACES|8|7|traces,0,1,h;cartes,0,4,v;écarts,2,1,h;carte,2,2,v;actes,5,0,h;sacré,2,6,v;écart,3,0,v|ACER ACTE AEC AES ARC ARCS ARES ARS ART ARTS ASC ASE ASTER ASTRE ATR CAE CAR CAS CASER CASTE CASTRE CATE CEA CER CESAR CEST CETA CRA CRASE CRE CREA CRS CSA CST CTE CTS ECT ERC ESA ESC ESR EST ESTA ETA ETS RAC RACE RASE RAT RATE RATES RATS RCA RCS RCT REA REAC RES RESTA RSA RSE RTC RTE RTS SAC SAR SART SCA SEC SER SERA SERT SRC STAR TAC TARSE TAS TASER TCE TEC TES TRA TRAC TRACE TRES TSAR TSE TSR",
  "CREME|4|7|crème,3,0,h;mère,0,4,v;créé,0,2,v;mer,1,0,h;ère,1,4,h|CEE CER CRE CRM ERC MERCE MRC",
  "CREPE|6|5|crêpe,3,0,h;percé,0,0,v;père,0,2,v;créé,0,4,v;pré,3,3,v;ère,1,0,h|CEE CEP CER CRE EPR ERC ERP PEC PEREC RECEP REP RPC",
  "AVOIR|5|6|avoir,2,0,h;voir,1,2,v;vrai,4,1,h;air,0,4,v;via,0,0,v;var,0,3,h|ARI AVI AVR IVO ORA ORI RAVI RIA RIVA ROI VAI VIR VOI VOR",
  "ANGES|5|7|anges,1,2,h;gens,0,5,v;ange,1,2,v;sage,3,0,h;âgés,0,0,v|AES AGE ANE ANES ANS ANSE ASE ASN EAN ENA ENS ESA GAN GEA GES GNA NAGE NAGES NAS NES NGA NSA SAN SEGA SNA",
  "SUCRE|7|7|sucre,4,2,h;reçus,2,4,v;sucer,1,6,v;crues,0,2,v;reçu,0,0,h;rues,0,0,v|CER CRE CRS CRU CRUE CRUS CSU CURE CURES ECU ECUS ERC ESC ESR EUS RCS RES REUS RSE RUE RUS RUSE SEC SECU SER SEU SRC SUC SUCE SUER SUR SURE URS USE",
  "REVEIL|8|7|réveil,4,1,h;levier,2,3,v;livrée,7,0,h;lièvre,0,1,v;livre,3,5,v;lever,0,1,h|EELV ELE ELIRE ERE EVE EVEIL EVIER ILE IRE IRL IVRE LEI LER LEV LEVE LEVI LEVRE LIE LIEE LIER LIRE LIV REEL REI RELIE REVE REVEL RIE RIEL RIVE VEL VER VIE VIEL VIER VIL VIR VIRE VIREE",
  "TRAINE|6|8|traîne,1,2,h;naître,0,4,v;train,1,2,v;tenir,0,7,v;inter,5,1,h;riant,3,0,h|AIE AIN AINE AIR AIRE ANE ANR ANTI ANTRE ARI ARN ART ARTI ATR EAN ENA ENI ENR ENT ENTR ENTRA ETA ETAI ETAIN ETI ETNA IAE IEN IENA INE INRA INTE INTRA IRAN IRE ITA ITER NAIT NAT NET NIE NIER NIET RAIE RAT RATE REA REI REIN REINA REN RENAIT RIA RIE RIEN RIENT RIT RITA RITE RTE TAIRE TARI TARN TERNI TIAN TIEN TIR TIRA TIRE TRA TRAN TRI TRIE",
  "FORET|7|7|forêt,3,2,h;forte,0,6,v;fort,1,4,v;fret,3,2,v;ôter,6,1,h;fer,4,0,h|EFT FET ORTF OTE OTRE REF ROTE RTE TRO",
  "PERLES|7|6|perles,5,0,h;pères,2,1,v;réels,3,0,h;près,0,4,v;père,1,2,h|EES ELE ELS EPR ERE ERP ESR LEP LEPRE LER LES LESE PEL PELE PELER PERL PERLE PERS PERSE PES PESE PESER PRE PSE REEL REP RES RESP RSE SEL SER SPE",
].map((e) => {
  const [t, a, s, n, o] = e.split("|");
  return {
    b: t,
    h: +a,
    c: +s,
    W: n.split(";").map((e) => {
      const [t, a, s, n] = e.split(",");
      return { d: t, k: nk(t), r: +a, c: +s, h: "h" === n };
    }),
    X: new Set(o.split(" ").filter(Boolean)),
  };
});
function pAna2(e) {
  const t = LVX(ANL2, "ana", anaGen),
    a = t.W,
    s = t.b,
    n = s.length,
    o = new Set(a.map((e) => e.k)),
    i = rng(2654435761 * (lv + 11)),
    r = (e, t) => e.r + (e.h ? 0 : t) + "," + (e.c + (e.h ? t : 0)),
    l = {};
  a.forEach((e, t) =>
    [...e.k].forEach((a, s) => {
      const n = r(e, s);
      (l[n] = l[n] || { ch: a, w: [] }).w.push(t);
    }),
  );
  const c = [...s];
  let d;
  for (let e = 0; e < 40; e++) {
    const e = c.slice();
    for (let t = e.length - 1; t > 0; t--) {
      const a = Math.floor(i() * (t + 1));
      [e[t], e[a]] = [e[a], e[t]];
    }
    if (((d = e.join("")), !o.has(d))) break;
  }
  const f = e && 4 === e.v;
  let u = f ? e.got.filter((e) => e < a.length) : [],
    h = f ? e.rev.filter((e) => e in l) : [],
    p = f && e.bn ? e.bn : [],
    m = [...d].map((e, t) => t),
    b = [],
    g = !1,
    E = null;
  snap = () => ({ v: 4, got: u, rev: h, bn: p });
  const y = () => a.every((e, t) => u.includes(t)),
    v = (e) => h.includes(e) || l[e].w.some((e) => u.includes(e)),
    A = () =>
      a.forEach((e, t) => {
        !u.includes(t) && [...e.k].every((t, a) => v(r(e, a))) && u.push(t);
      }),
    S = () =>
      Math.max(
        20,
        Math.min(
          42,
          Math.floor((Math.min(innerWidth, 460) - 84) / t.c) - 4,
          Math.floor((0.4 * innerHeight) / t.h) - 4,
        ),
      ),
    x = (e, a) => {
      const s = $("#agr");
      (s.style.setProperty("--t", S() + "px"),
        (s.style.gridTemplateColumns = `repeat(${t.c},var(--t))`),
        (s.innerHTML = Object.entries(l)
          .map(([t, s]) => {
            const [n, o] = t.split(",").map(Number),
              i = s.w.some((e) => u.includes(e)),
              r = !i && h.includes(t),
              l = e ? e.indexOf(t) : -1;
            return `<i class="${i ? "on" : r ? "rv" : ""}${l >= 0 ? " nw" : ""}${a && a.includes(t) ? " fl" : ""}" style="grid-row:${n + 1};grid-column:${o + 1}${l >= 0 ? ";--d:" + 70 * l + "ms" : ""}">${i || r ? s.ch : ""}</i>`;
          })
          .join("")));
    };
  frame(
    `<div class="agr" id="agr"></div><div class="pv" id="pv"></div><div class="whw"><button class="shf" data-a="shuf" aria-label="Mélanger les lettres" title="Mélanger"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg></button><div class="whl" id="whl"><svg viewBox="0 0 100 100"><polyline id="ln" points=""/></svg>${[...d].map((e) => `<b>${e}</b>`).join("")}</div></div>`,
    1,
  );
  const M = $("#whl"),
    L = [...M.querySelectorAll("b")],
    T = [],
    k = () =>
      m.forEach((e, t) => {
        const a = -Math.PI / 2 + (2 * t * Math.PI) / n;
        ((T[e] = [50 + 35 * Math.cos(a), 50 + 35 * Math.sin(a)]),
          (L[e].style.left = T[e][0] + "%"),
          (L[e].style.top = T[e][1] + "%"));
      }),
    w = () => {
      (L.forEach((e, t) => e.classList.toggle("s", b.includes(t))),
        ($("#pv").textContent = b.map((e) => d[e]).join("")));
      const e = b.map((e) => T[e].join(","));
      (g && E && b.length && e.push(E.join(",")), $("#ln").setAttribute("points", e.join(" ")));
    },
    R = (e) => {
      const t = M.getBoundingClientRect(),
        a = ((e.clientX - t.left) / t.width) * 100,
        s = ((e.clientY - t.top) / t.height) * 100;
      E = [a, s];
      for (let e = 0; e < n; e++)
        if (Math.hypot(a - T[e][0], s - T[e][1]) < 10) {
          const t = b.indexOf(e);
          t < 0 ? b.push(e) : t === b.length - 2 && b.pop();
          break;
        }
      w();
    },
    C = (e) => [...a[e].k].map((t, s) => r(a[e], s));
  (M.addEventListener("pointerdown", (e) => {
    ((g = !0), (b = []));
    try {
      M.setPointerCapture(e.pointerId);
    } catch (e) {}
    (R(e), e.preventDefault());
  }),
    M.addEventListener("pointermove", (e) => {
      g && R(e);
    }));
  const O = () => {
    g &&
      ((g = !1),
      (() => {
        const e = b.map((e) => d[e]).join("");
        if (!e) return;
        if (e.length < 3) return msg("Trois lettres au moins");
        const s = a.findIndex((t) => t.k === e);
        if (s >= 0) {
          if (u.includes(s)) return (x(null, C(s)), msg("Déjà trouvé"));
          const e = C(s).filter((e) => !v(e));
          (u.push(s),
            A(),
            sfx(660, 0.4),
            vib(15),
            x(e.length ? e : C(s)),
            msg("✦ " + a[s].d),
            sv(),
            y() && setTimeout(win, 1100));
        } else if (t.X.has(e) || GW.has(e)) {
          if (p.includes(e)) return msg("Déjà trouvé");
          (p.push(e), fl++, st.set("fl", fl), chip(), sv(), msg("Mot bonus · +1 🫧"));
        } else {
          const e = $("#pv");
          (e.classList.remove("bad"), e.offsetWidth, e.classList.add("bad"), msg("Ce mot dort encore…"));
        }
      })(),
      (b = []),
      w());
  };
  (M.addEventListener("pointerup", O),
    M.addEventListener("pointercancel", O),
    M.addEventListener("contextmenu", (e) => e.preventDefault()),
    (act.shuf = () => {
      (m.sort(() => Math.random() - 0.5), k(), (b = []), w());
    }),
    (act.hint = () => {
      const e = a.map((e, t) => t).filter((e) => !u.includes(e));
      if (!e.length || !spend(1)) return;
      const t = e[(Math.random() * e.length) | 0],
        s = C(t).filter((e) => !v(e)),
        n = s[(Math.random() * s.length) | 0];
      h.push(n);
      const o = u.length;
      (A(), x([n]), sv(), u.length > o && msg("✦ " + a[u[u.length - 1]].d), y() && setTimeout(win, 1100));
    }),
    (window.__anT = S),
    window.__anR ||
      ((window.__anR = 1),
      addEventListener("resize", () => {
        const e = $("#agr");
        e && window.__anT && e.style.setProperty("--t", window.__anT() + "px");
      })),
    k(),
    A(),
    x(),
    w());
}
const FLC = [
  "#ff5a5f",
  "#4f8cff",
  "#3ccf6e",
  "#ffd84a",
  "#ff9a3c",
  "#5fe0e6",
  "#e65cd7",
  "#a06cff",
  "#b8e986",
  "#f2f2f2",
  "#c9874a",
  "#ff8fb1",
];
const flSz = (e) => (e < 5 ? 5 : e < 15 ? 6 : e < 30 ? 7 : e < 45 ? 8 : 9);
const FLO = (() => {
  const e = rng(424242),
    t = [...Array(49).keys()]
      .map((e) => e + 10)
      .map((e) => [e, flSz(e)])
      .concat([...Array(15).keys()].map((e) => [100 + e, 6]));
  for (let a = t.length - 1; a > 0; a--) {
    const s = Math.floor(e() * (a + 1));
    [t[a], t[s]] = [t[s], t[a]];
  }
  return [...[...Array(10).keys()].map((e) => [e, flSz(e)]), ...t.slice(0, 39), [59, 9], ...t.slice(39)];
})();
function flGen(e) {
  const t = FLO[e] || [e, e >= NLS.flow && e % 3 == 2 ? 8 : 7];
  return flGen0(t[0], t[1]);
}
function flGen0(e, t) {
  const a = rng(2246822519 * (e + 3) + 17),
    s = t * t,
    n = (e) => {
      const a = (e / t) | 0,
        s = e % t,
        n = [];
      return (
        a && n.push(e - t),
        a < t - 1 && n.push(e + t),
        s && n.push(e - 1),
        s < t - 1 && n.push(e + 1),
        n
      );
    };
  let o = null;
  for (let e = 0; e < 300; e++) {
    let e = [];
    for (let a = 0; a < t; a++) for (let s = 0; s < t; s++) e.push(a * t + (a % 2 ? t - 1 - s : s));
    for (let t = 0; t < 60 * s; t++) {
      a() < 0.5 && e.reverse();
      const t = n(e[0]),
        s = t[(a() * t.length) | 0],
        o = e.indexOf(s);
      o > 1 && (e = e.slice(0, o).reverse().concat(e.slice(o)));
    }
    const i = t - 1 + (a() < 0.5 ? 0 : 1) + (t >= 9 && a() < 0.5 ? 1 : 0),
      r = Array(i).fill(3);
    let l = s - 3 * i;
    const c = r.map(() => 0.3 + a() * a() * 2.5),
      d = c.reduce((e, t) => e + t, 0);
    for (let e = 0; e < i; e++) {
      const t = Math.floor((l * c[e]) / d);
      r[e] += t;
    }
    let f = s - r.reduce((e, t) => e + t, 0);
    for (; f-- > 0;) r[(a() * i) | 0]++;
    const u = [];
    let h = 0;
    for (const t of r) (u.push(e.slice(h, h + t)), (h += t));
    const p =
      10 *
        u.filter((e) => {
          return (
            (a = e[0]),
            (s = e[e.length - 1]),
            Math.abs(((a / t) | 0) - ((s / t) | 0)) + Math.abs((a % t) - (s % t)) === 1
          );
          var a, s;
        }).length +
      u.filter((e) => e.every((a) => ((a / t) | 0) == ((e[0] / t) | 0)) || e.every((a) => a % t === e[0] % t))
        .length;
    if (((!o || p < o.sc) && (o = { sc: p, S: u }), 0 === p)) break;
  }
  const i = o.S.map((e) => (a() < 0.5 ? e.slice().reverse() : e));
  return { n: t, S: i, F: i.map((e) => [e[0], e[e.length - 1]]) };
}
function pFlow(e) {
  const t = flGen(lvD("flow")),
    a = t.n,
    s = t.F.length,
    n = a * a,
    o = {};
  t.F.forEach(([e, t], a) => {
    ((o[e] = a), (o[t] = a));
  });
  const i = (e, t) => Math.abs(((e / a) | 0) - ((t / a) | 0)) + Math.abs((e % a) - (t % a)) === 1;
  let r = e && 2 === e.v && e.p && e.p.length === s ? e.p.map((e) => e.slice()) : t.F.map(() => []),
    l = (e && e.mv) || 0,
    c = -1,
    d = null,
    f = r.map(() => !1),
    u = !1;
  snap = () => ({ v: 2, p: r, mv: l });
  const h = () => {
      const e = Array(n).fill(-1);
      return (r.forEach((t, a) => t.forEach((t) => (e[t] = a))), e);
    },
    p = (e) => FLC[e % FLC.length],
    m = (e) => (e % a) + 0.5,
    b = (e) => 0.5 + ((e / a) | 0);
  let g = "";
  for (let e = 1; e < a; e++) g += `M${e} 0V${a}M0 ${e}H${a}`;
  frame(
    `<div class="fls" id="fls"></div><div class="flw"><svg class="flv" id="flv" viewBox="-.06 -.06 ${a + 0.12} ${a + 0.12}">\n  <g>${[...Array(n).keys()].map((e) => `<rect class="flc" id="fc${e}" x="${(e % a) + 0.04}" y="${0.04 + ((e / a) | 0)}" width=".92" height=".92" rx=".1" style="--d:${35 * ((e % a) + ((e / a) | 0))}ms"/>`).join("")}</g>\n  <path class="flg" d="M0 0H${a}V${a}H0Z${g}"/>\n  <circle class="flcur" id="flcur" r=".62" cx="-5" cy="-5"/>\n  <g>${t.F.map((e, t) => `<polyline class="flp" id="fp${t}" stroke="${p(t)}" points=""/>`).join("")}</g>\n  <g>${t.F.map(([e, t], a) => [e, t].map((e) => `<circle class="fld" data-c="${a}" fill="${p(a)}" cx="${m(e)}" cy="${b(e)}" r=".34"/>`).join("")).join("")}</g>\n </svg></div>`,
    1,
  );
  const E = $("#flv"),
    y = $("#flcur"),
    v = () => {
      const e = h();
      for (let t = 0; t < n; t++) $("#fc" + t).style.fill = e[t] < 0 ? "" : p(e[t]);
      r.forEach((e, t) => $("#fp" + t).setAttribute("points", e.map((e) => m(e) + "," + b(e)).join(" ")));
      const t = r.map((e, t) =>
        ((e) => {
          const t = r[e];
          return t.length > 1 && o[t[t.length - 1]] === e && t[t.length - 1] !== t[0];
        })(t),
      );
      (E.querySelectorAll(".fld").forEach((e) => {
        const a = +e.dataset.c;
        (e.classList.toggle("ok", t[a]),
          t[a] && !f[a] && (e.classList.remove("pop"), e.getBBox(), e.classList.add("pop")));
      }),
        t.forEach((e, t) => {
          ($("#fp" + t).classList.toggle("ok", e), e && !f[t] && d && (sfx(520 + 40 * t, 0.25), vib(12)));
        }),
        (f = t));
      const a = e.filter((e) => e >= 0).length;
      return (
        ($("#fls").innerHTML =
          `<span>Fils <b>${t.filter(Boolean).length}/${s}</b></span><span>Coups <b>${l}</b></span><span>Grille <b>${Math.round((100 * a) / n)} %</b></span>`),
        { ok: t, f: a }
      );
    },
    A = (e) => {
      const t = E.getBoundingClientRect(),
        s = (a + 0.12) / t.width;
      return [(e.clientX - t.left) * s - 0.06, (e.clientY - t.top) * s - 0.06];
    },
    S = ([e, t]) => (e < 0 || t < 0 || e >= a || t >= a ? -1 : (0 | t) * a + (0 | e)),
    x = () => {
      const e = new Set(d.p);
      r = d.base.map((t, a) => {
        if (a === d.c) return d.p;
        const s = t.findIndex((t) => e.has(t));
        return s < 0 ? t.slice() : t.slice(0, s);
      });
    },
    M = (e) => {
      const t = d.p,
        a = t[t.length - 1];
      if (e === a) return !0;
      const s = t.indexOf(e);
      return s >= 0
        ? ((t.length = s + 1), !0)
        : !(
            !i(a, e) ||
            (t.length > 1 && o[a] === d.c) ||
            (void 0 !== o[e] && o[e] !== d.c) ||
            (t.push(e), 0)
          );
    };
  (E.addEventListener("pointerdown", (e) => {
    if (u) return;
    const t = A(e),
      a = S(t);
    if (a < 0) return;
    const s = h();
    let n, i;
    if (void 0 !== o[a]) ((n = o[a]), (i = [a]));
    else {
      if (!(s[a] >= 0)) return;
      ((n = s[a]), (i = r[n].slice(0, r[n].indexOf(a) + 1)));
    }
    d = { c: n, p: i, base: r.map((e) => e.slice()), b0: JSON.stringify(r) };
    try {
      E.setPointerCapture(e.pointerId);
    } catch (e) {}
    (y.setAttribute("cx", t[0]),
      y.setAttribute("cy", t[1]),
      (y.style.fill = p(n)),
      E.classList.add("drg"),
      x(),
      v(),
      e.preventDefault());
  }),
    E.addEventListener("pointermove", (e) => {
      if (!d) return;
      const t = A(e);
      (y.setAttribute("cx", t[0]),
        y.setAttribute("cy", t[1]),
        ((e) => {
          let t = d.p[d.p.length - 1],
            s = 0;
          for (; t !== e && s++ < 20;) {
            if (d.p.includes(e)) {
              M(e);
              break;
            }
            const s = ((e / a) | 0) - ((t / a) | 0),
              o = (e % a) - (t % a),
              r =
                Math.abs(s) >= Math.abs(o)
                  ? [t + Math.sign(s) * a, t + Math.sign(o)]
                  : [t + Math.sign(o), t + Math.sign(s) * a];
            let l = !1;
            for (const e of r)
              if (e !== t && e >= 0 && e < n && i(t, e) && M(e)) {
                l = !0;
                break;
              }
            if (!l) break;
            t = d.p[d.p.length - 1];
          }
          (x(), v());
        })(S([Math.min(a - 0.01, Math.max(0, t[0])), Math.min(a - 0.01, Math.max(0, t[1]))])));
    }));
  const L = () => {
    if (!d) return;
    const e = JSON.stringify(r) !== d.b0;
    (e && d.c !== c && (l++, (c = d.c)), (d = null), E.classList.remove("drg"));
    const t = v();
    (e && sv(), T(t));
  };
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => E.addEventListener(e, L));
  const T = (e) => {
    u ||
      (e.ok.every(Boolean) &&
        (e.f === n
          ? ((u = !0), E.classList.add("won"), msg("Toute la grille brille ✦"), setTimeout(win, 1300))
          : msg("Tous les fils sont reliés : remplis aussi toute la grille.")));
  };
  ((act.hint = () => {
    if (u) return;
    const e = r.findIndex(
      (e, a) => e.join() !== t.S[a].join() && e.join() !== t.S[a].slice().reverse().join(),
    );
    if (e < 0 || !spend(1)) return;
    const a = new Set(t.S[e]);
    r = r.map((s, n) => {
      if (n === e) return t.S[e].slice();
      const o = s.findIndex((e) => a.has(e));
      return o < 0 ? s : s.slice(0, o);
    });
    const s = $("#fp" + e);
    (s.classList.remove("hn"), s.getBBox(), s.classList.add("hn"), sv(), T(v()));
  }),
    v());
}
const G2L = [
  [4, 64],
  [4, 128],
  [4, 128],
  [4, 256],
  [3, 64],
  [4, 256],
  [5, 256],
  [4, 512],
  [3, 128],
  [4, 512],
  [5, 512],
  [4, 512],
  [3, 128],
  [4, 1024],
  [5, 1024],
  [4, 1024],
  [3, 256],
  [5, 1024],
  [4, 1024],
  [4, 2048],
  [5, 2048],
  [3, 256],
  [4, 1024],
  [5, 2048],
  [4, 2048],
  [3, 256],
  [5, 2048],
  [4, 2048],
  [5, 4096],
  [4, 2048],
  [4, 128, { rk: [5] }],
  [4, 64, { mv: 80 }],
  [4, 64, { cnt: 2 }],
  [5, 256, { rk: [12] }],
  [5, 128, { st: 1 }],
  [4, 0, { sc: 800 }],
  [4, 256, { rk: [0] }],
  [4, 256, { g4: 1 }],
  [5, 256, { mv: 250 }],
  [5, 128, { cnt: 2 }],
  [5, 512, { rk: [0] }],
  [5, 256, { st: 1 }],
  [4, 128, { mv: 120 }],
  [5, 0, { sc: 2500 }],
  [4, 64, { mv: 60 }],
  [5, 256, { rk: [6, 18] }],
  [5, 128, { cnt: 3 }],
  [4, 512, { g4: 1 }],
  [5, 0, { sc: 2e3, mv: 300 }],
  [5, 1024, { rk: [24] }],
];
const G2C = {
  2: ["#eef4fb", "#3b4a6b"],
  4: ["#d9e7f7", "#3b4a6b"],
  8: ["#aed3f6", "#24406b"],
  16: ["#82b8f0", "#fff"],
  32: ["#6895ea", "#fff"],
  64: ["#7a6ee6", "#fff"],
  128: ["#9a62d8", "#fff"],
  256: ["#c45cc4", "#fff"],
  512: ["#e0609a", "#fff"],
  1024: ["#f0846a", "#fff"],
  2048: ["#f5b942", "#fff"],
  4096: ["#ffd96a", "#6b4a10"],
};
function p2048(e) {
  const t = "g2048" === INFG,
    [a, s, n = {}] = t ? [4, 0, {}] : G2L[lv % G2L.length],
    o = new Set(n.rk || []),
    i = n.cnt || 1,
    r = n.mv || 0,
    l = n.sc || 0;
  let c = 0,
    d = [],
    f = 0,
    u = 0,
    h = null,
    p = !1,
    m = null,
    b = !1,
    g = !1,
    E = 0,
    y = 0;
  const v = (e, t, a) => {
      const s = { id: ++f, v: e, r: t, c: a, el: null };
      return (d.push(s), s);
    },
    A = () => {
      const e = [];
      for (let t = 0; t < a; t++)
        for (let s = 0; s < a; s++)
          o.has(t * a + s) || d.some((e) => e.r === t && e.c === s) || e.push([t, s]);
      return e;
    },
    S = () => {
      const e = A();
      if (!e.length) return null;
      const [t, a] = e[(Math.random() * e.length) | 0];
      return v(n.g4 ? (Math.random() < 0.9 ? 4 : 8) : Math.random() < 0.9 ? 2 : 4, t, a);
    },
    x = () => {
      const e = Array(a * a).fill(0);
      return (d.forEach((t) => (e[t.r * a + t.c] = t.v)), e);
    };
  (e && e.g && e.g.length === a * a
    ? (e.g.forEach((e, t) => {
        e && v(e, (t / a) | 0, t % a);
      }),
      (u = e.sc || 0),
      (h = e.pv || null),
      (c = e.mu || 0))
    : (S(), S()),
    (snap = () => ({ g: x(), sc: u, pv: h, mu: c })),
    t && (snap = null),
    frame(
      `<div class="g2h"><div class="g2t"><small>${t ? "Mode" : "Objectif"}</small>${t ? "<b>Infini</b>" : l ? `<b>${l} pts</b>` : `<b class="g2o" style="--tb:${G2C[s][0]};--tf:${G2C[s][1]}">${i > 1 ? i + " × " : ""}${s}</b>`}</div><div class="g2t"><small>Score</small><b id="g2s">${u}</b></div>${r ? `<div class="g2t"><small>Coups</small><b id="g2m">${r - c}</b></div>` : ""}<button class="g2u" data-a="g2u" aria-label="Annuler le dernier coup, 1 bulle"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg><span>1 🫧</span></button></div>\n  <div class="g2b" id="g2b" style="--n:${a}">${[...Array(a * a).keys()].map((e) => (o.has(e) ? '<i class="rk"></i>' : "<i></i>")).join("")}<div class="g2ar" id="g2ar"></div><div class="g2ov" id="g2ov" hidden></div></div><p class="g2k">${n.rk ? "Les glaçons ne bougent pas : les flocons s’arrêtent contre eux." : n.st ? "Tempête : deux flocons tombent à chaque glissement." : n.g4 ? "Neige épaisse : les nouveaux flocons valent 4." : r ? "Atteins l’objectif avant la fin des coups." : i > 1 ? "Fais naître " + i + " flocons " + s + " en même temps." : l ? "Atteins " + l + " points de score." : "Glisse dans une direction : tous les flocons partent ensemble."}</p>`,
      1,
    ));
  const M = $("#g2b"),
    L = (e) => `calc(var(--gp)*${e.c + 1} + ${100 * e.c}%) calc(var(--gp)*${e.r + 1} + ${100 * e.r}%)`,
    T = (e) => {
      const t = G2C[e.v] || ["#ffe9a8", "#6b4a10"];
      ((e.el.style.background = t[0]),
        (e.el.style.color = t[1]),
        (e.el.textContent = e.v),
        (e.el.dataset.d = String(e.v).length),
        e.el.classList.toggle("gl", e.v >= 128));
    },
    k = (e, t) => {
      const a = document.createElement("b");
      ((a.className = "g2x" + (t ? " " + t : "")),
        (e.el = a),
        (a.style.transition = "none"),
        (a.style.translate = L(e)),
        T(e),
        M.appendChild(a));
    },
    w = () => {
      ((() => {
        const e = M.clientWidth;
        ((y = Math.max(6, Math.round(0.025 * e))),
          (E = (e - y * (a + 1)) / a),
          M.style.setProperty("--s", E + "px"),
          M.style.setProperty("--gp", y + "px"));
      })(),
        d.forEach((e) => {
          (e.el || k(e), (e.el.style.transition = "none"), (e.el.style.translate = L(e)));
        }));
    },
    R = () => {
      $("#g2s").textContent = u;
      const e = $("#g2m");
      e && ((e.textContent = r - c), e.classList.toggle("lo", r - c <= 10));
    },
    C = () => {
      if (A().length) return !0;
      const e = x();
      for (let t = 0; t < a; t++)
        for (let s = 0; s < a; s++) {
          const n = e[t * a + s];
          if ((s < a - 1 && e[t * a + s + 1] === n) || (t < a - 1 && e[(t + 1) * a + s] === n)) return !0;
        }
      return !1;
    },
    O = (e, t) => {
      let s = !1,
        n = 0;
      const i = e.slice();
      for (let r = 0; r < a; r++) {
        const l = [...Array(a).keys()].map((e) => {
            const s = 0 === t || 2 === t ? e : a - 1 - e;
            return t < 2 ? r * a + s : s * a + r;
          }),
          c = [[]];
        l.forEach((e) => {
          o.has(e) ? c.push([]) : c[c.length - 1].push(e);
        });
        for (const t of c) {
          const a = t.map((t) => e[t]).filter(Boolean),
            o = [];
          for (let e = 0; e < a.length; e++)
            a[e] === a[e + 1] ? (o.push(2 * a[e]), (n += 2 * a[e]), e++) : o.push(a[e]);
          t.forEach((e, t) => {
            const a = o[t] || 0;
            (i[e] !== a && (s = !0), (i[e] = a));
          });
        }
      }
      return { g: i, moved: s, gain: n };
    },
    I = (e) => {
      if (b || g) return;
      if (p) return void (m = e);
      const f = x(),
        E = u,
        y = [],
        v = [];
      let A = !1;
      for (let t = 0; t < a; t++) {
        const s = [...Array(a).keys()].map((s) => {
          const n = 0 === e || 2 === e ? s : a - 1 - s;
          return e < 2 ? [t, n] : [n, t];
        });
        let n = 0,
          i = null;
        for (const [e, t] of s) {
          if (o.has(e * a + t)) {
            ((n = s.findIndex((a) => a[0] === e && a[1] === t) + 1), (i = null));
            continue;
          }
          const r = d.find((a) => a.r === e && a.c === t && !a.x);
          if (r)
            if (i && i.v === r.v && !i.m)
              ((r.r = i.r),
                (r.c = i.c),
                (r.x = 1),
                v.push(r),
                (i.v *= 2),
                (i.m = 1),
                y.push(i),
                (u += i.v),
                (A = !0));
            else {
              const [a, o] = s[n++];
              ((a === e && o === t) || (A = !0), (r.r = a), (r.c = o), (i = r));
            }
        }
      }
      if (!A) return (M.classList.remove("nm" + e), M.offsetWidth, void M.classList.add("nm" + e));
      ((h = { g: f, sc: E, mu: c }),
        c++,
        (p = !0),
        ($("#g2ar").className = "g2ar"),
        d.forEach((e) => {
          ((e.el.style.transition = ""), e.el.classList.remove("nw", "mg"));
        }),
        M.offsetWidth,
        d.forEach((e) => {
          const t = e.m ? e.v / 2 : e.v;
          ((e.el.style.translate = L(e)), e.m && (e.el.textContent = t));
        }),
        setTimeout(() => {
          if (
            (v.forEach((e) => {
              e.el.remove();
            }),
            (d = d.filter((e) => !e.x)),
            y.forEach((e) => {
              ((e.m = 0), T(e), e.el.classList.remove("mg"), e.el.offsetWidth, e.el.classList.add("mg"));
            }),
            y.length && (sfx(330 + 45 * Math.log2(Math.max(...y.map((e) => e.v))), 0.25), vib(8)),
            (() => {
              const e = [S()];
              return (n.st && e.push(S()), e.filter(Boolean));
            })().forEach((e) => k(e, "nw")),
            R(),
            sv(),
            (p = !1),
            !t && (l ? u >= l : d.filter((e) => e.v >= s).length >= i))
          )
            return (
              (b = !0),
              l
                ? M.classList.add("wonb")
                : d.filter((e) => e.v >= s).forEach((e) => e.el.classList.add("win")),
              msg(
                l
                  ? "Score atteint ✦"
                  : i > 1
                    ? i + " flocons " + s + " brillent ✦"
                    : "Le flocon " + s + " est né ✦",
              ),
              void setTimeout(win, 1400)
            );
          if (!C()) return ((g = !0), void N());
          if (r && c >= r) return ((g = !0), void N(1));
          if (null !== m) {
            const e = m;
            ((m = null), I(e));
          }
        }, 140));
    },
    N = (e) => {
      const a = $("#g2ov");
      if (((a.hidden = !1), t)) {
        const e = infSave("g2048", u);
        return (
          (a.innerHTML = `<div><b>Fin de partie</b><p>Score : ${u} pts${e ? " · nouveau record !" : " · record : " + infBest("g2048") + " pts"}</p><button class="btn" data-a="g2r">Rejouer</button></div>`),
          void requestAnimationFrame(() => a.classList.add("on"))
        );
      }
      ((a.innerHTML = `<div><b>${e ? "Plus de coups…" : "Plus de place…"}</b><p>${e ? "Les " + r + " coups sont joués." : "Aucun flocon ne peut encore bouger."}</p><button class="btn" data-a="g2u">Annuler le dernier coup · 1 🫧</button><button class="btn alt" data-a="g2r">Recommencer</button></div>`),
        requestAnimationFrame(() => a.classList.add("on")));
    },
    P = (e, t, s) => {
      ((c = s || 0),
        d.forEach((e) => e.el && e.el.remove()),
        (d = []),
        e.forEach((e, t) => {
          e && v(e, (t / a) | 0, t % a);
        }),
        (u = t),
        w(),
        d.forEach((e) => {
          e.el.classList.add("nw");
        }),
        R(),
        (g = !1));
      const n = $("#g2ov");
      (n.classList.remove("on"), (n.hidden = !0));
    };
  ((act.g2u = () => {
    if (!b && !p)
      return h
        ? void (spend(1) && (P(h.g, h.sc, h.mu), (h = null), sv(), msg("Dernier coup annulé.")))
        : msg("Rien à annuler pour l’instant.");
  }),
    (act.g2r = () => {
      if (b) return;
      const e = Array(a * a).fill(0);
      (P(e, 0, 0), S(), S(), w(), d.forEach((e) => e.el.classList.add("nw")), (h = null), sv());
    }),
    (act.hint = () => {
      if (b || g || p) return;
      const e = x();
      let t = -1,
        s = -1e9;
      for (let n = 0; n < 4; n++) {
        const o = O(e, n);
        if (!o.moved) continue;
        let i = 10 * o.g.filter((e) => !e).length + o.gain / 4;
        const r = Math.max(...o.g),
          l = o.g.indexOf(r),
          c = (l / a) | 0,
          d = l % a;
        (0 !== c && c !== a - 1) || (0 !== d && d !== a - 1) || (i += 15);
        for (let e = 0; e < 4; e++) {
          const t = O(o.g, e);
          t.moved && (i += t.g.filter((e) => !e).length);
        }
        i > s && ((s = i), (t = n));
      }
      if (t < 0 || !spend(1)) return;
      const n = $("#g2ar");
      ((n.className = "g2ar"),
        n.offsetWidth,
        (n.className = "g2ar on d" + t),
        msg(
          ["Glisse vers la gauche", "Glisse vers la droite", "Glisse vers le haut", "Glisse vers le bas"][t],
        ));
    }));
  let U = null,
    q = null;
  (M.addEventListener("pointerdown", (e) => {
    ((U = e.clientX), (q = e.clientY));
    try {
      M.setPointerCapture(e.pointerId);
    } catch (e) {}
    e.preventDefault();
  }),
    M.addEventListener("pointermove", (e) => {
      if (null === U) return;
      const t = e.clientX - U,
        a = e.clientY - q;
      Math.max(Math.abs(t), Math.abs(a)) < 26 ||
        (I(Math.abs(t) > Math.abs(a) ? (t < 0 ? 0 : 1) : a < 0 ? 2 : 3), (U = null));
    }),
    ["pointerup", "pointercancel"].forEach((e) =>
      M.addEventListener(e, () => {
        U = null;
      }),
    ));
  const D = (e) => {
    if ("g2048" !== cur || !M.isConnected) return void removeEventListener("keydown", D);
    const t = { ArrowLeft: 0, ArrowRight: 1, ArrowUp: 2, ArrowDown: 3, KeyA: 0, KeyD: 1, KeyW: 2, KeyS: 3 }[
      e.key && e.key.startsWith("Arrow") ? e.key : e.code
    ];
    void 0 !== t && (e.preventDefault(), I(t));
  };
  addEventListener("keydown", D);
  const H = () => {
    M.isConnected ? w() : removeEventListener("resize", H);
  };
  addEventListener("resize", H);
  try {
    let ro = 0;
    new ResizeObserver(() => {
      M.isConnected && (cancelAnimationFrame(ro), (ro = requestAnimationFrame(() => M.isConnected && w())));
    }).observe(M);
  } catch (e) {}
  (w(),
    requestAnimationFrame(() => M.isConnected && w()),
    setTimeout(() => M.isConnected && w(), 450),
    d.forEach((e) => e.el.classList.add("nw")),
    C() ? r && c >= r && ((g = !0), N(1)) : ((g = !0), N()));
}
const TTP = {
  I: [
    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
  ],
  O: [
    [1, 0],
    [2, 0],
    [1, 1],
    [2, 1],
  ],
  T: [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  S: [
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
  ],
  Z: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  J: [
    [0, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  L: [
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  V: [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  D: [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
};
const TTC = {
  I: "#e8b48f",
  O: "#a99bd6",
  T: "#e59fb4",
  S: "#8cc5cf",
  Z: "#e6cf8a",
  J: "#97c9a6",
  L: "#8fa9e0",
  V: "#bfe6ef",
  D: "#f0b8d8",
  G: "#9aa6b8",
  C: "#f6d7ff",
};
const TTZ = { I: 4, O: 4, T: 3, S: 3, Z: 3, J: 3, L: 3, V: 2, D: 3 };
const TTR = {};
for (const e in TTP) {
  TTR[e] = [TTP[e]];
  for (let t = 1; t < 4; t++)
    TTR[e].push("O" === e ? TTP[e] : TTR[e][t - 1].map(([t, a]) => [TTZ[e] - 1 - a, t]));
}
const TTS = [
  { cr: 3, gb: 4 },
  { w: 8, goal: 10 },
  { pc: 30 },
  { bag: "ILJO", goal: 10 },
  { zen: 1, goal: 15 },
  { rise: 10, goal: 10 },
  { mc: 3 },
  { pc: 40, w: 8 },
  { cr: 4, gb: 5 },
  { w: 7, goal: 12 },
  { bag: "TSZ", goal: 8 },
  { pc: 35, rise: 8 },
  { zen: 1, goal: 20, gb: 4 },
  { rise: 8, goal: 12 },
  { mc: 4 },
  { pc: 45, bag: "TSZ" },
  { cr: 5, gb: 6 },
  { w: 8, bag: "IO", goal: 12 },
  { zen: 1, cr: 4, gb: 5 },
  { pc: 50, w: 7 },
  { rise: 9, w: 8, goal: 12 },
  { mc: 5 },
  { cr: 6, gb: 7 },
  { pc: 60 },
  { bag: "ILJ", goal: 14 },
  { zen: 1, goal: 25 },
];
const TTN = 66;
const TTO = (() => {
  const e = new Set(TTS.map((e, t) => Math.floor((66 * (t + 0.9)) / TTS.length)));
  let t = 0,
    a = 0;
  return [...Array(66).keys()].map((s) => (e.has(s) ? ["s", a++] : ["n", t++]));
})();
const ttLv = (e) => {
  const t = e % 66,
    a = Math.floor(e / 66),
    [s, n] = TTO[t],
    o = "s" === s ? Math.round((40 * t) / 66) : n,
    i = {
      goal: Math.min(30, 10 + 2 * Math.floor(o / 4)),
      ms: Math.max(170, 880 - 17 * o - 60 * a),
      gb: "n" === s && o % 5 == 4 ? Math.min(8, 3 + Math.floor(o / 8)) : 0,
    };
  return "s" === s ? Object.assign(i, TTS[n]) : i;
};
function pTeconta(e) {
  const t = "tetris" === INFG,
    a = t ? { goal: 1e9, ms: 800, gb: 0 } : ttLv(lv),
    s = a.w || 9,
    n = 20,
    o = rng(40503 * (lv + 5) + 9),
    i = a.pc ? "p" : a.cr ? "c" : a.mc ? "m" : "l",
    r = a.pc || a.cr || a.mc || a.goal,
    l = { p: "pièces posées", c: "cristaux", m: "coups multiples", l: "lignes" }[i];
  let c,
    d = 0,
    f = 0,
    u = 0,
    h = 0,
    p = null,
    m = [],
    b = null,
    g = !1,
    E = 0,
    y = 0,
    v = 0,
    A = 0,
    S = 0,
    x = !1,
    M = !1,
    L = !1,
    T = !1,
    k = null,
    w = -1,
    R = 0,
    C = 0,
    O = 0,
    I = 0,
    N = null,
    P = [],
    U = [],
    q = null,
    D = null,
    H = 0,
    G = 24,
    F = Math.min(2, devicePixelRatio || 1);
  snap = t ? null : () => ({});
  const B = () => {
      const e = a.bag ? [...a.bag, ...a.bag] : Object.keys(TTP);
      for (let t = e.length - 1; t > 0; t--) {
        const a = (Math.random() * (t + 1)) | 0;
        [e[t], e[a]] = [e[a], e[t]];
      }
      return e;
    },
    z = () => {
      c = [...Array(n)].map(() => Array(s).fill(null));
      for (let e = 0; e < a.gb; e++) {
        const t = 19 - e,
          a = (o() * s) | 0;
        for (let e = 0; e < s; e++) e !== a && o() < 0.86 && (c[t][e] = "G");
      }
      if (a.cr) {
        const e = [...Array(a.gb).keys()].sort(() => o() - 0.5);
        for (let t = 0; t < a.cr; t++) {
          const a = 19 - e[t % e.length],
            n = [...Array(s).keys()].filter((e) => "G" === c[a][e]);
          n.length && (c[a][n[(o() * n.length) | 0]] = "C");
        }
      }
      ((m = [...B(), ...B()]),
        (b = null),
        (g = !1),
        (E = 0),
        (d = 0),
        (f = 0),
        (u = 0),
        (h = 0),
        (y = 0),
        (w = -1),
        (P = []),
        (U = []),
        (k = null),
        (q = null),
        (D = null),
        (L = !1),
        ae());
    };
  frame(
    `<div class="tth"><button class="ttbx" data-a="ttHold" aria-label="Garder la pièce"><small>Garde</small><canvas id="tthc"></canvas></button>\n  <div class="ttmid"><div class="ttl"><span id="ttln">0</span>${t ? "" : " / " + r} ${l}</div><div class="ttbar"><i id="ttbr"></i></div><div class="tts"><span id="ttsc">0</span> pts</div></div>\n  <div class="ttbx ttnx"><small>Suivante</small><canvas id="ttnc"></canvas></div></div>\n  <div class="ttrow"><div class="ttc ttcl"><button data-k="l" aria-label="Gauche"><svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg></button><button data-k="t" aria-label="Tourner"><svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/></svg></button><button data-k="g" aria-label="Garder ou échanger la pièce"><svg viewBox="0 0 24 24"><path d="M7 7h11l-3-3M17 17H6l3 3"/></svg></button></div><div class="ttw" id="ttw"><canvas id="ttcv" class="ttcv"></canvas><div class="ttpop" id="ttpop"></div><div class="ttov" id="ttov" hidden></div>\n   <button class="ttpz" data-a="ttPause" aria-label="Pause"><svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg></button></div>\n  <div class="ttc ttcr"><button data-k="r" aria-label="Droite"><svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg></button><button data-k="d" aria-label="Descendre"><svg viewBox="0 0 24 24"><path d="M12 5v13M6 12l6 6 6-6"/></svg></button><button data-k="h" aria-label="Faire tomber"><svg viewBox="0 0 24 24"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg></button></div></div>`,
    1,
  );
  const V = $("#ttcv"),
    j = V.getContext("2d"),
    Z = $("#ttw"),
    Y = $("#tthc"),
    W = $("#ttnc"),
    K = () => st.get("tt:ctl", ""),
    Q = () => {
      (() => {
        const e = $(".ttrow");
        e && e.classList.toggle("nob", "g" === K());
      })();
      const e =
          Math.min(($(".ttrow") || Z.parentElement).clientWidth || 320, 520) -
          ("g" === K() ? 4 : 2 * (Math.min(50, Math.max(40, 0.105 * innerWidth)) + 6) + 6),
        t = $(".ttrow"),
        a = t ? t.getBoundingClientRect().top : 168,
        o = t
          ? [...t.parentElement.children]
              .filter((e) => 4 & t.compareDocumentPosition(e))
              .reduce((e, t) => e + (t.offsetHeight || 0) + 6, 0)
          : 0,
        i = Math.max(200, innerHeight - a - o - 22);
      ((G = Math.max(14, Math.floor(Math.min(e / s, i / n)))),
        (V.width = s * G * F),
        (V.height = n * G * F),
        (V.style.width = s * G + "px"),
        (V.style.height = n * G + "px"));
      const r = Math.max(8, Math.round(0.42 * G));
      ((Y.width = 4 * r * F),
        (Y.height = 2.4 * r * F),
        (Y.style.width = 4 * r + "px"),
        (Y.style.height = 2.4 * r + "px"),
        (W.width = 4 * r * F),
        (W.height = 2.4 * r * F),
        (W.style.width = 4 * r + "px"),
        (W.style.height = 2.4 * r + "px"),
        (X = {}),
        Te());
    };
  let X = {};
  const J = (e, t) => {
      const a = e + t;
      if (X[a]) return X[a];
      const s = document.createElement("canvas"),
        n = Math.ceil(t * F);
      s.width = s.height = n;
      const o = s.getContext("2d"),
        i = TTC[e],
        r = 0.07 * n,
        l = 0.3 * n;
      (o.beginPath(), o.roundRect(r, r, n - 2 * r, n - 2 * r, l));
      const c = o.createLinearGradient(0, 0, 0, n);
      if (
        (c.addColorStop(0, "rgba(255,255,255,.34)"),
        c.addColorStop(1, "rgba(255,255,255,0)"),
        (o.fillStyle = i),
        o.fill(),
        (o.fillStyle = c),
        o.fill(),
        (o.strokeStyle = "rgba(255,255,255,.38)"),
        (o.lineWidth = 0.04 * n),
        o.stroke(),
        "C" === e)
      ) {
        const e = n / 2;
        ((o.fillStyle = "#fff"), (o.shadowColor = "#ffe38a"), (o.shadowBlur = 0.25 * n), o.beginPath());
        for (let t = 0; t < 8; t++) {
          const a = (t * Math.PI) / 4,
            s = t % 2 ? 0.1 * n : 0.3 * n;
          o.lineTo(e + Math.cos(a) * s, e + Math.sin(a) * s);
        }
        (o.closePath(), o.fill(), (o.shadowBlur = 0));
      }
      return (X[a] = s);
    },
    _ = (e, t, a, s) => TTR[e][3 & t].map(([e, t]) => [a + e, s + t]),
    ee = (e, t, a, o) => _(e, t, a, o).every(([e, t]) => e >= 0 && e < s && t < n && (t < 0 || !c[t][e])),
    te = (e) => {
      let t = e.y;
      for (; ee(e.k, e.r, e.x, t + 1);) t++;
      return t;
    };
  function ae() {
    m.length < 8 && m.push(...B());
    const e = m.shift();
    ((p = { k: e, r: 0, x: Math.floor((s - TTZ[e]) / 2), y: "I" === e ? -1 : 0 }),
      (g = !1),
      (D = null),
      (R = p.x),
      (C = p.y - 0.7),
      (O = 0),
      (A = 0),
      (S = 0),
      (v = 0),
      Te(),
      ee(p.k, 0, p.x, p.y) || pe());
  }
  const se = () => {
      S < 15 && ((A = 0), S++);
    },
    ne = (e) =>
      !(
        !p ||
        k ||
        M ||
        L ||
        T ||
        (ee(p.k, p.r, p.x + e, p.y)
          ? ((p.x += e), se(), 0)
          : (Z.classList.remove("nl", "nr"), Z.offsetWidth, Z.classList.add(e < 0 ? "nl" : "nr"), 1))
      ),
    oe = (e) => {
      if (!p || k || M || L || T || "O" === p.k) return;
      const t = (p.r + e + 4) & 3;
      for (const [e, a] of [
        [0, 0],
        [-1, 0],
        [1, 0],
        [0, -1],
        [-2, 0],
        [2, 0],
        [-1, -1],
        [1, -1],
      ])
        if (ee(p.k, t, p.x + e, p.y + a))
          return ((p.r = t), (p.x += e), (p.y += a), (I = performance.now()), se(), void sfx(520, 0.03));
    },
    ie = () =>
      !(!p || k || M || L || T || !ee(p.k, p.r, p.x, p.y + 1) || (p.y++, (v = 0), (y += x ? 1 : 0), 0)),
    re = () => {
      if (!p || k || M || L || T) return;
      const e = p.y,
        t = te(p);
      ((y += 2 * (t - e)),
        (N = { cs: _(p.k, p.r, p.x, e), d: t - e, k: p.k, t: performance.now() }),
        (p.y = t),
        (C = t),
        ce(!0));
    },
    le = () => {
      if (!p || g || k || M || L || T) return;
      const e = p.k;
      (b
        ? ((p = { k: b, r: 0, x: Math.floor((s - TTZ[b]) / 2), y: "I" === b ? -1 : 0 }),
          (R = p.x),
          (C = p.y - 0.7),
          (O = 0),
          (A = 0),
          (S = 0))
        : ae(),
        (b = e),
        (g = !0),
        (D = null),
        Te(),
        sfx(440, 0.04));
    };
  function ce(e) {
    const t = performance.now();
    let a = !1;
    if (
      (_(p.k, p.r, p.x, p.y).forEach(([e, s]) => {
        s < 0 ? (a = !0) : ((c[s][e] = p.k), U.push([e, s, t]));
      }),
      e
        ? (Z.classList.remove("bump"), Z.offsetWidth, Z.classList.add("bump"), sfx(170, 0.07), vib(6))
        : sfx(230, 0.04),
      (p = null),
      (D = null),
      h++,
      d++,
      a)
    )
      return pe();
    const o = [];
    for (let e = 0; e < n; e++) c[e].every(Boolean) && o.push(e);
    if (o.length) {
      ((k = { rows: o, t: t }), w++);
      const e = o.length;
      ((y += [0, 120, 280, 460, 700][e] * (1 + Math.floor(lv / 10)) + 50 * Math.max(0, w)),
        sfx(480 + 90 * e, 0.22),
        vib(10 + 6 * e),
        o.forEach((e) => {
          for (let t = 0; t < s; t++)
            for (let a = 0; a < 2; a++)
              P.push({
                x: t + 0.5,
                y: e + 0.5,
                vx: 9 * (Math.random() - 0.5),
                vy: 7 * -Math.random() - 1,
                l: 1,
                c: TTC[c[e][t]],
                s: 0.12 + 0.16 * Math.random(),
              });
        }));
      const a = o.reduce((e, t) => e + c[t].filter((e) => "C" === e).length, 0);
      (a &&
        o.forEach((e) =>
          c[e].forEach((t, a) => {
            if ("C" === t)
              for (let t = 0; t < 14; t++)
                P.push({
                  x: a + 0.5,
                  y: e + 0.5,
                  vx: 12 * (Math.random() - 0.5),
                  vy: 10 * -Math.random() - 2,
                  l: 1.4,
                  c: t % 2 ? "#ffe38a" : "#ffffff",
                  s: 0.08 + 0.12 * Math.random(),
                });
          }),
        ),
        ue(
          a
            ? a > 1
              ? a + " cristaux libérés !"
              : "Cristal libéré !"
            : 4 === e
              ? "Quatre lignes !"
              : 3 === e
                ? "Triple !"
                : 2 === e
                  ? "Double !"
                  : w > 0
                    ? "Enchaînement ×" + (w + 1)
                    : "",
          a ? 4 : e,
        ));
    } else {
      if (((w = -1), he(), fe() >= r)) return be();
      de();
    }
    he();
  }
  function de() {
    if (a.rise && h >= a.rise) {
      if (((h = 0), c[0].some(Boolean))) return pe();
      c.shift();
      const e = (Math.random() * s) | 0;
      (c.push([...Array(s)].map((t, a) => (a === e ? null : "G"))),
        (q = { o: Array(n).fill(-1), t: performance.now() }),
        sfx(150, 0.12),
        vib(8));
    }
    ae();
  }
  function fe() {
    return "p" === i ? d : "c" === i ? f : "m" === i ? u : E;
  }
  const ue = (e, t) => {
      if (!e) return;
      const a = $("#ttpop");
      ((a.textContent = e),
        (a.className = "ttpop"),
        a.offsetWidth,
        (a.className = "ttpop on" + (t >= 4 ? " big" : "")));
    },
    he = () => {
      const e = fe();
      (t && (a.ms = Math.max(110, 800 - 50 * Math.floor(e / 10))),
        ($("#ttln").textContent = Math.min(e, r)),
        ($("#ttsc").textContent = y),
        ($("#ttbr").style.width = (t ? (e % 10) * 10 : Math.min(100, (100 * e) / r)) + "%"));
    },
    pe = () => {
      ((L = !0), (p = null), sfx(200, 0.3));
      const e = $("#ttov");
      if (((e.hidden = !1), t)) {
        const t = infSave("tetris", y);
        return (
          (e.innerHTML = `<div><b>La pile touche le ciel</b><p>${E} ligne${E > 1 ? "s" : ""} · ${y} pts${t ? " · nouveau record !" : " · record : " + infBest("tetris") + " pts"}</p><button class="btn" data-a="ttRe">Rejouer</button></div>`),
          void requestAnimationFrame(() => e.classList.add("on"))
        );
      }
      ((e.innerHTML = `<div><b>La pile touche le ciel</b><p>${fe()} ${l} sur ${r}.</p><button class="btn" data-a="ttCont">Continuer · 1 🫧</button><button class="btn alt" data-a="ttRe">Recommencer</button></div>`),
        requestAnimationFrame(() => e.classList.add("on")));
    },
    me = () => {
      const e = $("#ttov");
      (e.classList.remove("on"), (e.hidden = !0));
    },
    be = () => {
      ((M = !0), (p = null));
      const e = performance.now();
      for (let t = 0; t < n; t++)
        for (let a = 0; a < s; a++)
          c[t][a] &&
            (U.push([a, t, e + 25 * (n - t)]),
            Math.random() < 0.5 &&
              P.push({
                x: a + 0.5,
                y: t + 0.5,
                vx: 6 * (Math.random() - 0.5),
                vy: 8 * -Math.random() - 2,
                l: 1.3,
                c: "#ffffff",
                s: 0.1 + 0.12 * Math.random(),
              }));
      (ue("Bravo !", 4), setTimeout(win, 1600));
    };
  ((act.ttHold = le),
    (act.ttPause = () => {
      if (M || L) return;
      T = !T;
      const e = $("#ttov");
      T
        ? ((e.hidden = !1),
          (e.innerHTML = `<div><b>Pause</b><p>Les flocons attendent.</p><button class="btn" data-a="ttPause">Reprendre</button><button class="btn alt" data-a="ttCtl" data-v="${"g" === K() ? "b" : "g"}">${"g" === K() ? "Jouer avec les boutons" : "Jouer au doigt seulement"}</button></div>`),
          requestAnimationFrame(() => e.classList.add("on")))
        : me();
    }),
    (act.ttCont = () => {
      if (L && spend(1)) {
        for (let e = 0; e < 10; e++) c[e].fill(null);
        (me(), (L = !1));
        for (let e = 0; e < 40; e++)
          P.push({
            x: Math.random() * s,
            y: 10 * Math.random(),
            vx: 4 * (Math.random() - 0.5),
            vy: 5 * -Math.random(),
            l: 1,
            c: "#ffffff",
            s: 0.1 + 0.1 * Math.random(),
          });
        ae();
      }
    }),
    (act.ttRe = () => {
      (me(), z(), he());
    }),
    (act.hint = () => {
      if (!p || k || M || L || T) return;
      let e = null;
      for (let t = 0; t < 4; t++)
        for (let a = -2; a < s; a++) {
          if (!ee(p.k, t, a, p.y) && !ee(p.k, t, a, 0)) continue;
          let o = ee(p.k, t, a, p.y) ? p.y : 0;
          if (!ee(p.k, t, a, o)) continue;
          for (; ee(p.k, t, a, o + 1);) o++;
          const i = c.map((e) => e.slice());
          let r = !0;
          if (
            (_(p.k, t, a, o).forEach(([e, t]) => {
              t < 0 ? (r = !1) : (i[t][e] = 1);
            }),
            !r)
          )
            continue;
          const l = i.filter((e) => !e.every(Boolean)),
            d = n - l.length;
          for (; l.length < n;) l.unshift(Array(s).fill(null));
          let f = 0,
            u = 0,
            h = 0,
            m = [];
          for (let e = 0; e < s; e++) {
            let t = 0,
              a = !1;
            for (let s = 0; s < n; s++) l[s][e] ? a || ((t = n - s), (a = !0)) : a && u++;
            (m.push(t), (f += t));
          }
          for (let e = 0; e < s - 1; e++) h += Math.abs(m[e] - m[e + 1]);
          const b = 0.76 * d - 0.51 * f - 0.36 * u * 1.6 - 0.18 * h;
          (!e || b > e.sc) && (e = { sc: b, ro: t, x: a, y: o });
        }
      e &&
        spend(1) &&
        ((D = { k: p.k, r: e.ro, x: e.x, y: e.y, t: performance.now() }),
        msg("La place dorée est la plus douce pour cette pièce."));
    }));
  const ge = {};
  document.querySelectorAll(".ttc button").forEach((e) => {
    const t = e.dataset.k,
      a = () => {
        "l" === t
          ? ne(-1)
          : "r" === t
            ? ne(1)
            : "t" === t
              ? oe(1)
              : "d" === t
                ? ((x = !0), ie())
                : "h" === t
                  ? re()
                  : "g" === t && le();
      };
    e.addEventListener("pointerdown", (s) => {
      (s.preventDefault(),
        e.classList.add("on"),
        a(),
        "lrd".includes(t) &&
          (clearTimeout(ge[t]),
          (ge[t] = setTimeout(function e() {
            (a(), (ge[t] = setTimeout(e, "d" === t ? 45 : 55)));
          }, 170))));
    });
    const s = () => {
      (e.classList.remove("on"), clearTimeout(ge[t]), "d" === t && (x = !1));
    };
    ["pointerup", "pointerleave", "pointercancel"].forEach((t) => e.addEventListener(t, s));
  });
  let Ee = null;
  const ye = (e) => {
    if (!V.isConnected) return void document.removeEventListener("pointerdown", ye, !0);
    if (e.button > 0 || M || L || T || !$("#ttw")) return;
    const t = e.target;
    if (t.closest && t.closest("button,a,input,.top,.ttov,.nav,nav,dialog")) return;
    (e.preventDefault(),
      (Ee = {
        x: e.clientX,
        y: e.clientY,
        t: performance.now(),
        ax: 0,
        ax0: 0,
        m: !1,
        v: !1,
        id: e.pointerId,
        hd: !1,
      }));
    const a = Ee;
    (clearTimeout(Ee.ht),
      (Ee.ht = setTimeout(() => {
        Ee !== a || a.m || a.v || !V.isConnected || ((a.hd = !0), (x = !0));
      }, 260)));
  };
  document.addEventListener("pointerdown", ye, !0);
  const ve = (e) => {
      xe() ||
        ((e) => {
          if (!Ee || e.pointerId !== Ee.id) return;
          if (!V.isConnected) return void (Ee = null);
          const t = Math.max(18, 0.9 * G),
            a = e.clientX - Ee.x,
            s = e.clientY - Ee.y;
          if (
            (!Ee.m && !Ee.v && !Ee.hd && Math.hypot(a, s) > 10 && (Ee.v = Math.abs(s) > 1.2 * Math.abs(a)),
            Ee.v)
          )
            return;
          let n = a / t - Ee.ax;
          for (; n >= 1;) (ne(1), Ee.ax++, n--, (Ee.m = !0));
          for (; n <= -1;) (ne(-1), Ee.ax--, n++, (Ee.m = !0));
        })(e);
    },
    Ae = (e) => {
      xe() ||
        ((e) => {
          if (!Ee || e.pointerId !== Ee.id) return;
          const t = performance.now() - Ee.t,
            a = e.clientX - Ee.x,
            s = e.clientY - Ee.y,
            n = Ee.v,
            o = Ee.hd;
          (clearTimeout(Ee.ht),
            (Ee = null),
            o
              ? (x = !1)
              : V.isConnected &&
                (n && s > 30 ? re() : n && s < -40 ? le() : Math.hypot(a, s) < 12 && t < 350 && oe(1)));
        })(e);
    },
    Se = () => {
      (Ee && (clearTimeout(Ee.ht), Ee.hd && (x = !1)), (Ee = null), xe());
    },
    xe = () => {
      if (!V.isConnected)
        return (
          document.removeEventListener("pointermove", ve),
          document.removeEventListener("pointerup", Ae),
          document.removeEventListener("pointercancel", Se),
          !0
        );
    };
  (document.addEventListener("pointermove", ve),
    document.addEventListener("pointerup", Ae),
    document.addEventListener("pointercancel", Se));
  const Me = (e) => {
      if (!V.isConnected) return (removeEventListener("keydown", Me), void removeEventListener("keyup", Le));
      if (T) {
        [
          "Enter",
          " ",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "KeyA",
          "KeyD",
          "KeyW",
          "KeyS",
        ].includes(e.code) && (e.preventDefault(), act.ttCtl("b"));
        return;
      }
      const dn = () => {
          ((x = !0), ie());
        },
        t =
          {
            ArrowLeft: () => ne(-1),
            ArrowRight: () => ne(1),
            ArrowUp: () => oe(1),
            x: () => oe(1),
            z: () => oe(-1),
            ArrowDown: dn,
            " ": () => re(),
            c: le,
            Shift: le,
            p: act.ttPause,
            Escape: act.ttPause,
          }[e.key] ||
          { KeyA: () => ne(-1), KeyD: () => ne(1), KeyW: () => oe(1), KeyS: dn, KeyC: le }[e.code];
      t && (e.preventDefault(), t());
    },
    Le = (e) => {
      ("ArrowDown" !== e.key && "KeyS" !== e.code) || (x = !1);
    };
  function Te() {
    const e = Y.width / 4,
      t = (t, a, s, n, o) => {
        if (!a) return;
        const i = TTR[a][0],
          r = Math.min(...i.map((e) => e[0])),
          l = Math.max(...i.map((e) => e[0])),
          c = Math.min(...i.map((e) => e[1])),
          d = Math.max(...i.map((e) => e[1])),
          f = (l - r + 1) * e,
          u = (d - c + 1) * e,
          h = J(a, e / F);
        ((t.globalAlpha = o),
          i.forEach(([a, o]) => t.drawImage(h, s - f / 2 + (a - r) * e, n - u / 2 + (o - c) * e, e, e)),
          (t.globalAlpha = 1));
      };
    let a = Y.getContext("2d");
    (a.clearRect(0, 0, Y.width, Y.height),
      t(a, b, Y.width / 2, Y.height / 2, g ? 0.4 : 1),
      (a = W.getContext("2d")),
      a.clearRect(0, 0, W.width, W.height),
      t(a, m[0], W.width / 2, W.height / 2, 1));
  }
  (addEventListener("keydown", Me), addEventListener("keyup", Le));
  const ke = (e) => 1 - Math.pow(1 - Math.min(1, Math.max(0, e)), 3),
    we = (e) => {
      if (!V.isConnected) return;
      requestAnimationFrame(we);
      const t = Math.min(50, e - (H || e));
      if (
        ((H = e),
        P.forEach((e) => {
          ((e.x += (e.vx * t) / 1e3), (e.y += (e.vy * t) / 1e3), (e.vy += (14 * t) / 1e3), (e.l -= t / 900));
        }),
        (P = P.filter((e) => e.l > 0 && e.y < 22)),
        k &&
          e - k.t >= 220 &&
          (() => {
            const e = k.rows;
            k = null;
            const t = c.filter((t, a) => !e.includes(a)),
              a = e.length,
              o = e.reduce((e, t) => e + c[t].filter((e) => "C" === e).length, 0);
            ((f += o), a >= 2 && u++);
            const i = Array(n).fill(0);
            let l = 19;
            for (let t = 19; t >= 0; t--) e.includes(t) || ((i[l] = e.filter((e) => e > t).length), l--);
            ((c = [...Array(a)].map(() => Array(s).fill(null)).concat(t)),
              (q = { o: i, t: performance.now() }),
              (E += a),
              he(),
              fe() >= r ? be() : de());
          })(),
        p && !T && !k && !L && !M)
      ) {
        ((O += t / 120), (v += t));
        const e = x ? Math.min(45, a.ms) : a.ms;
        if (ee(p.k, p.r, p.x, p.y + 1))
          if (((A = 0), a.zen && !x)) v = 0;
          else for (; v >= e && ((v -= e), ie()););
        else ((v = 0), (A += t), A >= 480 && ce(!1));
      }
      (p &&
        ((R += (p.x - R) * Math.min(1, t / 45)),
        (C += (p.y - C) * Math.min(1, t / 55)),
        Math.abs(p.x - R) < 0.01 && (R = p.x),
        Math.abs(p.y - C) < 0.01 && (C = p.y)),
        ((e) => {
          const t = G * F;
          (j.setTransform(1, 0, 0, 1, 0, 0),
            j.clearRect(0, 0, V.width, V.height),
            (j.fillStyle = "rgba(255,255,255,.12)"),
            j.beginPath());
          for (let e = 1; e < s; e++)
            for (let a = 1; a < n; a++)
              (j.moveTo(e * t + 0.05 * t, a * t), j.arc(e * t, a * t, 0.05 * t, 0, 7));
          j.fill();
          let a = null;
          if (q) {
            const t = (e - q.t) / 170;
            t >= 1 ? (q = null) : (a = q.o.map((e) => e * (1 - ke(t))));
          }
          for (let o = 0; o < n; o++) {
            const n = k && k.rows.includes(o),
              i = a ? a[o] : 0;
            for (let a = 0; a < s; a++) {
              const s = c[o][a];
              if (s) {
                if (n) {
                  const n = (e - k.t) / 220,
                    i = 1 - ke(n),
                    r = (a + 0.5) * t,
                    l = (o + 0.5) * t;
                  ((j.globalAlpha = Math.max(0, 1 - 0.6 * n)),
                    j.drawImage(J(s, G), r - (t * i) / 2, l - (t * i) / 2, t * i, t * i),
                    (j.globalAlpha = Math.max(0, 0.8 - n)),
                    (j.fillStyle = "#fff"),
                    j.fillRect(a * t, o * t, t, t),
                    (j.globalAlpha = 1));
                  continue;
                }
                j.drawImage(J(s, G), a * t, (o - i) * t, t, t);
              }
            }
          }
          if (
            ((U = U.filter(([t, a, s]) => e - s < 260)),
            U.forEach(([a, s, n]) => {
              const o = e < n ? 0 : 0.55 * (1 - (e - n) / 260);
              o <= 0 ||
                ((j.globalAlpha = o),
                (j.fillStyle = "#fff"),
                j.beginPath(),
                j.roundRect(a * t + 0.06 * t, s * t + 0.06 * t, 0.88 * t, 0.88 * t, 0.2 * t),
                j.fill(),
                (j.globalAlpha = 1));
            }),
            N)
          ) {
            const a = (e - N.t) / 200;
            if (a >= 1) N = null;
            else {
              const e = {};
              N.cs.forEach(([t, a]) => {
                e[t] = Math.min(e[t] ?? 99, a);
              });
              for (const s in e) {
                const n = e[s] * t,
                  o = (e[s] + N.d) * t,
                  i = j.createLinearGradient(0, n, 0, o);
                (i.addColorStop(0, "rgba(255,255,255,0)"),
                  i.addColorStop(1, TTC[N.k]),
                  (j.globalAlpha = 0.45 * (1 - a)),
                  (j.fillStyle = i),
                  j.fillRect(s * t + 0.2 * t, n, 0.6 * t, Math.max(0, o - n)),
                  (j.globalAlpha = 1));
              }
            }
          }
          if (p) {
            const a = te(p);
            ((j.globalAlpha = 0.22),
              _(p.k, p.r, p.x, a).forEach(([e, a]) => {
                a >= 0 && j.drawImage(J(p.k, G), e * t, a * t, t, t);
              }),
              (j.globalAlpha = 1),
              D &&
                D.k === p.k &&
                ((j.strokeStyle = "#ffd34d"),
                (j.lineWidth = 0.1 * t),
                (j.globalAlpha = 0.6 + 0.4 * Math.sin(e / 220)),
                _(D.k, D.r, D.x, D.y).forEach(([e, a]) => {
                  a >= 0 &&
                    (j.beginPath(),
                    j.roundRect(e * t + 0.1 * t, a * t + 0.1 * t, 0.8 * t, 0.8 * t, 0.2 * t),
                    j.stroke());
                }),
                (j.globalAlpha = 1)));
            const s = (e - I) / 140,
              n = s < 1 ? 1 + 0.1 * (1 - ke(s)) : 1,
              o = _(p.k, p.r, 0, 0),
              i = o.reduce((e, t) => e + t[0], 0) / 4 + 0.5,
              r = o.reduce((e, t) => e + t[1], 0) / 4 + 0.5;
            ((j.globalAlpha = Math.min(1, O)),
              (j.shadowColor = TTC[p.k]),
              (j.shadowBlur = 0.4 * t),
              j.save(),
              j.translate((R + i) * t, (C + r) * t),
              j.scale(n, n),
              o.forEach(([e, a]) => {
                C + a > -1 && j.drawImage(J(p.k, G), (e - i) * t, (a - r) * t, t, t);
              }),
              j.restore(),
              (j.shadowBlur = 0),
              (j.globalAlpha = 1));
          }
          (P.forEach((e) => {
            ((j.globalAlpha = Math.max(0, Math.min(1, e.l))),
              (j.fillStyle = e.c),
              j.beginPath(),
              j.arc(e.x * t, e.y * t, e.s * t, 0, 7),
              j.fill());
          }),
            (j.globalAlpha = 1));
        })(e));
    },
    Re = () => {
      V.isConnected ? Q() : removeEventListener("resize", Re);
    };
  if (
    (addEventListener("resize", Re),
    (window.__TTDBG = {
      fill: () => {
        const e = _(p.k, p.r, p.x, 0),
          t = Math.max(...e.map((e) => e[1]));
        for (let a = 0; a < s; a++) c[19][a] = e.some((e) => e[0] === a && e[1] === t) ? null : "T";
      },
      st: () => ({ lines: E, clr: !!k, cur: p && { ...p }, done: M }),
    }),
    (act.ttCtl = (e) => {
      (st.set("tt:ctl", "g" === e ? "g" : "b"), Q(), T && ((T = !1), me()));
    }),
    z(),
    Q(),
    he(),
    requestAnimationFrame(() => {
      V.isConnected && Q();
    }),
    !K())
  ) {
    T = !0;
    const e = $("#ttov");
    ((e.hidden = !1),
      (e.innerHTML =
        '<div><b>Comment veux-tu jouer ?</b><p>Tu pourras changer plus tard dans la pause.</p><button class="btn" data-a="ttCtl" data-v="b">Avec les boutons</button><button class="btn alt" data-a="ttCtl" data-v="g">Au doigt seulement</button><p class="ttch">Au doigt : touche pour tourner, glisse à gauche ou à droite pour déplacer, glisse vers le bas pour lâcher, vers le haut pour garder.</p></div>'),
      requestAnimationFrame(() => e.classList.add("on")));
  }
  (msg(
    a.pc
      ? "Défi : pose " + a.pc + " pièces sans que la pile touche le haut."
      : a.cr
        ? "Des cristaux dorment dans la glace : libère-les en effaçant leurs rangées."
        : a.zen
          ? "Neige immobile : les pièces ne tombent pas toutes seules. Prends ton temps."
          : a.rise
            ? "Marée de glace : une rangée monte du fond toutes les " + a.rise + " pièces."
            : a.mc
              ? "Efface au moins 2 lignes d’un coup, " + a.mc + " fois."
              : a.bag
                ? "Petit sac : seules ces pièces tombent (" + [...a.bag].join(", ") + ")."
                : a.w
                  ? "Grille étroite : les lignes se remplissent plus vite."
                  : a.gb
                    ? "Des rangées de glace attendent au fond : creuse jusqu’à elles."
                    : "",
  ),
    requestAnimationFrame(we));
}
