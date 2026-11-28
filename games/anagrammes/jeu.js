// Anagrammes (mode Anagramme du Jeu de mots, id « ana ») : niveaux ANL/ANL2, génération anaGen, écrans pAna (ancien) et pAna2.
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
  // Contrôles via Input : appuyer sur la roue puis glisser de lettre en lettre, lâcher pour proposer le mot.
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher", "menu"],
    (k, i) => {
      const e = i.evt;
      if ("toucher" === k) {
        ((h = !0), (u = []));
        try {
          g.setPointerCapture(e.pointerId);
        } catch (e) {}
        (S(e), e.preventDefault());
      } else "lacher" === k ? x(e) : "menu" === k ? e.preventDefault() : h && S(e);
    },
    { cible: g, annulation: !0 },
  ),
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
  // Contrôles via Input : appuyer sur la roue puis glisser de lettre en lettre, lâcher pour proposer le mot.
  (Input.sur(
    ["toucher", "glisser", "survoler", "lacher", "menu"],
    (k, i) => {
      const e = i.evt;
      if ("toucher" === k) {
        ((g = !0), (b = []));
        try {
          M.setPointerCapture(e.pointerId);
        } catch (e) {}
        (R(e), e.preventDefault());
      } else "lacher" === k ? O(e) : "menu" === k ? e.preventDefault() : g && R(e);
    },
    { cible: M, annulation: !0 },
  ),
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
function anaGen(a) {
  const n = wfLen(a, 1),
    tg = Math.min(n + 2, wfN(a, n) - 1),
    R = rng(9973 * a + 17);
  for (let t = 0; t < 30; t++) {
    const c = wfCand(n, n <= 5 ? 6e3 : 12e3, 4, a + 97 * t);
    if (!c) continue;
    const b = c.b,
      s = wfPick(c, Math.min(c.s.length, tg + 4), R).sort((x, y) => y.k.length - x.k.length),
      P = lvLay([b, ...s], R, n + 2, tg);
    if (P.length < Math.min(4, tg)) continue;
    const W = P.map((p) => ({ d: p.w.w, k: p.w.k, r: p.r, c: p.c, h: p.h })),
      IN = new Set(W.map((w) => w.k));
    return {
      b: b.k,
      h: Math.max(...W.map((w) => w.r + (w.h ? 1 : w.k.length))),
      c: Math.max(...W.map((w) => w.c + (w.h ? w.k.length : 1))),
      W: W,
      X: new Set(c.s.map((w) => w.k).filter((k) => !IN.has(k))),
    };
  }
  return ANL2[a % ANL2.length];
}
