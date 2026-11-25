// Funniest One-Line Out-of-Office Reply
// Entry: a single out-of-office auto-reply, one line long.
//
// The joke has to come from the away message itself, not from a
// beach or an inbox. A real auto-reply states when you are back
// and what happens to urgent mail; the funny turn is to answer
// that question with total, unbothered confidence, in the sender's
// own voice.
//
// Revision: the draft hedged ("it can wait"). The final line
// reverses the premise instead — "If this is urgent, it isn't" —
// then justifies it deadpan with "I checked before I left", as if
// urgency were something the sender had already audited and
// dismissed. No setup, no name or signature needed, and every
// word is doing work: the return date makes it a real away
// message, the reversal is the laugh, the last clause is the
// punch landing on the first read.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm out of office until Monday. If this is urgent, it isn't — I checked before I left.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
// Gate: 1-160 characters, one line, not only whitespace.
const text = line.trim();
if (text.length < 1 || text.length > 160 || text.includes("\n")) {
  throw new Error(`entry must be 1-160 characters on one line, got ${text.length}`);
}
writeFileSync(`${out}/entry.txt`, text + "\n");
