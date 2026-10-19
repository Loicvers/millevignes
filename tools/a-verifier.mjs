// Régénère docs/a-verifier.md depuis les pastilles to_check des fiches.
// Usage : node tools/migrate-fiches.mjs && node tools/a-verifier.mjs
import { readFileSync, writeFileSync } from "node:fs";

const { notions } = JSON.parse(readFileSync("data/base.json", "utf8"));
const todo = notions.filter(n => n.to_check?.length).sort((a, b) => a.legacy_id - b.legacy_id);
const verified = notions.filter(n => n.status === "verified").length;
const items = todo.reduce((s, n) => s + n.to_check.length, 0);

const out = [
  `# Faits à vérifier (⚠️)`,
  ``,
  `Généré par \`tools/a-verifier.mjs\` depuis les champs \`to_check\` : ne pas éditer à la main.`,
  `${notions.length} fiches : ${verified} vérifiées, ${todo.length} à vérifier (${items} points).`,
  ``,
  ...todo.map(n => `**Fiche ${n.legacy_id}** (p.${n.refs?.[0]?.page ?? "?"}) — ${n.titre}\n` +
    n.to_check.map(t => `- [ ] ${t}`).join("\n") + "\n"),
].join("\n");
writeFileSync("docs/a-verifier.md", out);
console.log(`docs/a-verifier.md : ${todo.length} fiches, ${items} points`);
