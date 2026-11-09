# SPEAKER SPECS

## Pre-Conference
We want to help the speakers be able to know what their audicence would to hear before they even meet them. They can do this by seeing a collection of summari
# Speaker specifications

## Role and goals

Speakers prepare and deliver sessions. They want to understand the audience, present reliably, and know whether the session was useful. They should control the session materials and recording options attributed to them.

## Before the conference

### Understand audience interests

Speakers can review an organizer-approved summary of the topics attendees said they want to learn. The summary should be aggregated and should not reveal individual registration answers by default. Speakers can use it to adjust examples, emphasis, and session descriptions; it is guidance, not a promise that every attendee has the same interests.

### Prepare the session

Speakers can review their session details, share links or resources, and confirm whether live transcription or translation is enabled. They need to know what will be recorded, who can view the resulting content, and how long it will be retained.

## During the conference

### Deliver and monitor the session

Speakers can see a simple readiness/status indicator for enabled session services. If transcription or translation is delayed or unavailable, the status should explain the issue in plain language and provide a fallback contact or action. Speakers should not need to interpret infrastructure metrics or use the Dash0 console.

### Polls and audience questions — candidate feature

If enabled by the organizer, speakers may launch a poll or survey during a session and view its results. Poll participation should be optional. Whether a speaker can view individual responses, show live results, or export results needs an explicit privacy decision.

## After the conference

### Feedback and follow-up

Speakers can review aggregate attendee feedback for their own sessions and submit feedback about the conference experience. They can share follow-up links or resources with attendees who choose to receive them. The platform should not give speakers attendee contact details without consent.

### Session content

If the event's recording policy allows it, speakers may review or approve a transcript, summary, or other session materials before publication. Publication and retention permissions should be clear before the session begins.

## Dash0: session service health and resource use

Dash0 is primarily for the platform's technical operators, who use it to diagnose service capacity and performance. It can help them relate session delays to CPU, memory, GPU (where available), active streams, queue depth, errors, and transcription or translation latency. [Dash0 dashboards](https://www.dash0.com/docs/dash0/dashboards/about-dashboards) can bring telemetry signals together; host or Kubernetes resource detail depends on how the platform is deployed.

Speakers receive only a simple, session-specific status and useful next step in the conference product. Do not expose other sessions' infrastructure data, raw attendee data, or Dash0 access to speakers by default. Dash0 can identify a bottleneck, but any decision to queue, move, or scale work must be handled by the platform's operations and infrastructure.

## Questions to resolve with the project team

- Can speakers edit session details or only review organizer-entered information?
- Must speakers explicitly opt in to recording, transcription, and transcript publication?
- Can speakers correct transcripts, and who approves the final version?
- Which feedback is visible to a speaker, and should it be anonymous or moderated?
- What should the speaker experience show when live services are degraded?
