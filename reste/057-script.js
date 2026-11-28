try {
  if (!st.get("m3:mig1", 0)) {
    for (let i = 140; i >= 70; i--)
      ["c:", "k:", "p:"].forEach((p) => {
        const a = p + "match3:" + i,
          v = st.get(a, null);
        if (v !== null && v !== !1) {
          st.set(p + "match3:" + (i + 50), v);
          st.set(a, null);
        }
      });
    st.set("m3:mig1", 1);
  }
} catch (e) {}
