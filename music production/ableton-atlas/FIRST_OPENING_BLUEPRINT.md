# First opening, first return

Draft 0.2 · September 20, 2026 · Blueprint with an initial local interaction sketch; not student-tested

Revision note: the user rejected the first task-oriented presentation. The current local sketch explores gesture/instrument, the life of a note, and musical repetition instead. The landmark labels below are historical proposals, not the current surface. Behavioral requirements—starting beside Live, quiet recovery, teacher-held return points, and no expected preparation—remain in force. See the workbench README for the current revision and checks.

[Project dashboard](</Users/donovan/work/classes/PROJECT_DASHBOARD.md>) · [Content outline](</Users/donovan/work/classes/music production/ableton-atlas/ATLAS_OUTLINE.md>) · [Specification](</Users/donovan/work/classes/music production/ableton-atlas/SPEC.md>)

## The experience we are aiming for

Live is open. The Atlas helps her orient to what she can do **right here**, without first asking her to read an introduction, select a role, or understand the whole subject. The lesson is still the core experience; the teacher can use the Atlas beside Live without requiring her to manage two applications.

The starting landmark is **“I've just opened Live.”** This is a place on a larger map, not the first level of a course. Familiar musical actions lead into unfamiliar software. The teacher may enter elsewhere when her actual situation differs.

This blueprint defines relationships and behavior before surface styling. It does not prescribe a particular Live view, instrument, controller, or exact click sequence. The Atlas does not detect Live's state, operate it, or claim to know what the learner has done.

## A small neighborhood, not a setup wizard

Proposed initial nearby landmarks:

| Landmark | Relationship made visible | Initial interaction | Existing content basis |
| --- | --- | --- | --- |
| **Play and hear** | A gesture reaches an instrument or audio route and becomes something audible | Locate one working sound with the teacher; open recovery help only when needed | `hear-signal`, `play-instruments`; `play-audio-midi` as optional explanation |
| **Keep an idea** | Something played can remain available after the moment ends | Capture if useful and feasible; otherwise retain the working setup or unresolved question | `play-record`, `keep-projects`, `keep-fragments` |
| **Change its response** | The sound influences how the same gesture feels and what the player does next | Notice one contrast, then return control to the learner | `shape-envelopes`, `edit-velocity`, `listen-compare` |

These are recognizable entry situations, not three required buttons to complete in order. “Keep an idea” must not imply that saving a Set automatically records a performance. Exact recording and saving operations are separately checked later.

Connections express a relationship, not a command: gesture is received by an instrument; playing information can be captured as a recording; a recorded span can repeat. Labels make those routes visible without telling the reader what to think or try. The wider map is available from the beginning. Nearby content is emphasized for orientation, never unlocked by accomplishment.

The map opens close enough that those relationships are legible. Widening the view reveals their broader neighborhoods. A plain-language list offers the same destinations and connections for keyboard, screen-reader, and narrow-screen use. Dragging and interpreting a diagram are never the only way through.

## Three starting situations

| What is actually happening | What the Atlas supports | A truthful stopping point |
| --- | --- | --- |
| Sound works; she is ready to play | One familiar gesture, one question she cares about, and a nearby possibility | A sound, phrase, comparison, or question worth returning to |
| Live is open but the intended sound does not work | A small recovery branch anchored to the actual route; teacher checks one uncertainty at a time | A verified working state **or** the exact symptom and next shared check |
| She already has an idea or wants something else | Go directly to that situation or the wider map | The opening landmark is skipped without penalty |

No-sound help stays subordinate to music-making. For a software instrument, the conceptual checkpoints are incoming playing information, the instrument/track, and the listening output. Recording a piano's own sound is a different branch. Show only the relevant branch; full routing, monitoring, device choices, and safe operation need the actual setup and current manual verification before release.

An alternative teacher demonstration can keep a musical conversation going, but is never reported as proof that the student's setup is fixed. A setup-only lesson is not a failed level and creates no student troubleshooting assignment.

## The detail beside a landmark

Opening a landmark keeps the selected place and its nearby connections apparent. The first layer contains its name, labeled connections, and a way back. The following material is optional depth, not default narration:

- A recognizable question, such as “Why does this sound make me play differently?”
- One relationship to notice, with an original demonstration when a checked one exists.
- A brief action or comparison when useful, including stop/restore guidance.
- A useful word beside what it describes; deeper explanation can expand underneath.
- A few connected places, each with a reason to go there.

The existing 150–300-word samples are **reference-layer drafts**, not introductory text that must fill the first view. Different content needs different treatment: recovery can be a small signal path; expressive response a comparison; musical phrasing a relationship across time. Do not force every entry into the same long card.

No unavailable audio player, fake download, or locked-page teaser appears. A spoken demonstration in the lesson is sufficient while media is unmade. Planned resources remain in private authoring records.

## Keeping a place without measuring a person

Keep three meanings distinct:

| Meaning | How it is recorded | What it does not mean |
| --- | --- | --- |
| **Explored together** | Teacher deliberately connects a lesson note to a concept | Mastered, assessed, or completed |
| **Visited in this visit** | Temporary navigation trail with back/return behavior | A persistent engagement log or teacher surveillance |
| **Want to return** | An optional deliberate marker by the learner or teacher | Assigned work or a scheduled next lesson |

A lasting personal trail can grow from deliberate saved places and lesson records. Do not silently persist clicks, infer ability, or make saving markers necessary for useful navigation. A learner may arrange a few marked places into a personal route, change it, or discard it; the product does not recommend a path or select a persona for them. Route editing is later scope, not a prerequisite for the first prototype.

Public concept content and private lesson context remain separate. The prototype must use clearly fictional notes. Real note delivery, permissions, and storage are undecided; browser-local flags must not masquerade as synchronized teacher notes or a backup.

## A return point small enough to keep during a lesson

At a natural pause, the teacher records what mattered and where to resume. A term or related link is optional. There is no form the student must finish.

**Fictional example — student-readable teacher note:**

> We found a sound you could play comfortably. A slower entrance made you leave more space. Kept the working Set as “Window sound” in the lesson folder; we did not record the phrase. Next time we can play again and decide whether to keep a performance.

**Fictional setup-only alternative:**

> Live showed incoming playing information, but we did not get the intended instrument sounding. Next time we will check the intended track's input and instrument together. No working sound or recorded phrase was saved today.

Both are invented illustrations, not student records or verified diagnoses. Private teacher preparation remains a different record. Student additions, if offered, keep their own authorship and do not replace the teacher's note.

## First return: assume nothing happened between lessons

The teacher brings up the last useful note and re-establishes context through sound or the unresolved check. The learner is not asked to recall terminology, find the file unaided, or explain non-use.

If a phrase was captured, find it and listen together. If only a sound was saved, play something fresh. If nothing was saved or a reference is unavailable, rebuild what is practical or return to the recorded symptom. New interests may replace any of these options.

The Atlas can reopen a deliberately kept place where the chosen storage supports it; otherwise the teacher follows a stable concept link. It does not show onboarding again by default or pretend it has opened the corresponding Live Set. No automated DAW integration is implied.

## Bounded next prototype

Build only after translating this blueprint into a compact interaction sketch. Use one coherent local neighborhood, one concept detail, a back/wider-map action, one recovery branch, and a fictional return note. Do not implement all six territories, an account system, a resource library, audio production, or route editing to test this behavior.

Minimum concept roles are `hear-signal`, `play-instruments`, `play-record`, `keep-projects`, `shape-envelopes`, and `listen-compare`. These are an authoring subset, not six things to teach. The nine-plus-context collection remains a broader reserve. A phrase-centered bridge deserves its own later brief; it must not be reduced to operating a loop.

Before the slice is called ready, test these scenarios:

1. First-time arrival can identify one useful action without reading a long introduction.
2. No sound leads to recovery help and can end honestly unresolved.
3. A familiar musical gesture leads to a meaningful connected possibility without a prescribed sequence.
4. Back and wider-map controls preserve orientation; a non-visual route provides equivalent access.
5. A teacher can leave a short return point without marking mastery or sharing private preparation.
6. A later lesson resumes with no student browsing, practice, flags, or downloads.
7. Missing saved context has an honest fallback; no claim of automatic Live state or shared storage.

An initial [local sketch and check record](</Users/donovan/work/classes/music production/ableton-atlas/workbench/README.md>) now cover basic navigation, recovery, a fictional zero-preparation return, deliberate temporary markers, keyboard activation, and narrow-screen behavior. These are interface checks, **not evidence of lesson effectiveness or complete acceptance**. Technical operations, clarity with a real learner, real note handling, and production persistence remain untested.

## Basis and decisions still open

This is an original synthesis of the reviewed [Piano Atlas principles and course research](</Users/donovan/work/classes/music production/ableton-atlas/SOURCE_REVIEW.md>), the [coverage audit](</Users/donovan/work/classes/music production/ableton-atlas/drafts/round-01/SOURCE_COVERAGE_AUDIT.md>), [first-collection proposals](</Users/donovan/work/classes/music production/ableton-atlas/drafts/round-01/FIRST_COLLECTION.md>), [lesson/resource brief](</Users/donovan/work/classes/music production/ableton-atlas/drafts/round-01/LESSON_RESOURCE_BRIEFS.md>), and the user's map-first/first-opening direction. No new source-media review, technical check, or user test occurred during drafting.

Open when needed: exact visual geometry, final territory names, learner's full Live setup, note-sharing medium, durable personal-map storage, and the contextual listening example. None requires another broad research pass before sketching the small neighborhood. Demo projects remain briefs only; publication and actual sharing require separate approval.
