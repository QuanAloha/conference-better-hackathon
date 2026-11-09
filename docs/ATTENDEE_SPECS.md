# Attendee specifications

## Role and goals

Attendees discover sessions, decide what they want to learn, participate in person or remotely, and revisit useful ideas after the event. They should be able to understand and control how their preferences, participation, and session content are used.

## Before the conference

### Share learning interests

Attendees may tell the organizer what topics they hope to learn about during registration or in their profile. The platform can use these preferences to suggest sessions and create aggregate interest summaries for organizers and speakers. Attendees should be told what is shared, and individual answers should not be exposed to speakers by default.

### Find sessions

Attendees can browse the schedule and session details. Personalized recommendations based on their interests are a candidate enhancement; the first version can rely on schedule browsing and a saved-session list.

## During the conference

### Follow a session

For sessions where the organizer has enabled it, attendees can view live transcription and select an available translation language on their own device. The experience should display the selected session and language, indicate when captions or translations are delayed, and remain usable on a phone.

If a service is unavailable, attendees should receive a clear status and an alternative where possible. The platform should not imply that a generated transcript or translation is error-free.

### Participate

Attendees may respond to optional speaker polls or surveys. They may save a session or a useful point for later. Whether attendees can submit questions, join chat, or watch remotely is still a scope decision; chat and watch parties add moderation and streaming requirements.

## After the conference

### Revisit and search session material — later scope

With the event's permission settings, attendees may revisit published transcripts, summaries, and resources. Future versions could support searching across talks, asking questions grounded in a session, or receiving a personalized digest or RSS feed that links back to relevant talks and transcript passages.

Attendees should be able to see whether content is public, event-only, or private to them, and request deletion where the event policy allows it. Sharing follow-up by email or text must be opt-in.

### Give feedback

Attendees may provide optional feedback about a session or the event. The interface should explain whether responses are anonymous, who can see them, and how aggregate results may be used.

## Dash0: attendee privacy and service quality

Dash0 is an operational observability platform for the service team, not an attendee-facing feature. Operators may use it to monitor transcription/translation latency, availability, queue delays, and compute-resource pressure so they can address capacity issues. [Dash0 dashboards](https://www.dash0.com/docs/dash0/dashboards/about-dashboards) can display operational metrics, traces, and logs.

Attendees should see only relevant service status in the conference product, such as whether live translation is available or delayed. Do not send audio, transcript text, attendee identity, registration answers, or identifiable search activity to Dash0. Any usage metrics should be aggregated and designed to avoid identifying an attendee.

## Questions to resolve with the project team

- Which languages are needed at launch, and who chooses the available translations?
- Which sessions are recorded, and who can access live and archived transcripts?
- Are session questions, bookmarks, searches, and feedback tied to an attendee account?
- What is the minimum accessible experience if a phone has poor connectivity?
- Which post-event features are essential: transcripts, summaries, search, Q&A, RSS, or external note-app export?
