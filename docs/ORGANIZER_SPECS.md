# Organizer specifications

## Role and goals

Conference organizers configure the event, coordinate speakers and sessions, and make sure attendees can use the conference experience reliably. Their main goals are to:

- understand what attendees hope to learn;
- prepare rooms and services for expected demand;
- monitor live session tools during the event; and
- learn what worked so the next event can improve.

## Before the conference

### Event setup

Organizers create the conference, its schedule, rooms, tracks, and participation options. They can configure which sessions offer live transcription and translation, identify the languages offered, and set who can access session content.

**Open decisions:** which event and schedule fields are required? Can attendees access sessions remotely, in person, or both? Who can publish or edit session details?

### Attendee interests and session planning

During registration, attendees may share topics they want to learn about. Organizers can review aggregate interest summaries and share relevant themes with speakers. They can use expected session interest and registration numbers as inputs when assigning rooms or planning capacity.

Do not treat interest counts as guaranteed attendance. Avoid exposing individual registration answers to speakers unless an attendee has explicitly agreed to share them.

### Floor map and exhibitor layout — later scope

Organizers may place services, exhibitors, and activities on a conference map. Interest patterns could help organizers choose whether related exhibitors should be grouped together or distributed to encourage discovery. This depends on having exhibitor and venue-map data and is not required for the first working version.

## During the conference

### Live session operations

Organizers can see which sessions are configured for transcription or translation and whether those services are healthy. For each session, the operations view should show:

- transcription and translation service status;
- active session connections or streams;
- processing latency, including speech-to-transcript and translation delay;
- errors, retries, and queue or backlog indicators; and
- a clear warning when service quality is degraded.

Organizers need a way to identify the affected session and communicate an outage or fallback plan. The attendee and speaker experiences should show a simpler service status, without exposing internal infrastructure details.

### Audience participation

Organizers can enable speaker-created polls or surveys for a session and view aggregate responses. Polls should be optional for attendees and should not interrupt access to the talk. Whether results are anonymous, visible live, or retained after the event is an event-level policy decision.

### In-person and remote attendee support — later scope

The platform may provide venue maps, live transcripts and translations on attendees' devices, and remote viewing or group discussion. Remote watch parties and chat introduce moderation, video delivery, and capacity requirements; treat them as separate features that need validation before including them in the initial scope.

## After the conference

### Session insights

Organizers can review aggregate engagement and feedback by session. Potential signals include attendance or participation counts, poll responses, attendee ratings, and searches for topics within published transcripts. These are indicators of engagement, not a definitive score of a talk's quality, learning, or retention.

If transcript searches are included, report aggregate query themes and counts. Do not show organizers a named attendee's searches by default. Explain how low-volume results are handled so individuals cannot be inferred from small groups.

### Speaker follow-up and feedback

Organizers can collect attendee feedback for speakers and organizer feedback from speakers. Speakers may share follow-up links or resources with attendees who opt in. Email or text campaigns should require explicit recipient consent and comply with event communication preferences.

### Session archive and personalized follow-up — later scope

With speaker and attendee permissions, the platform may publish session transcripts, summaries, or RSS feeds. A future personalized digest could point attendees to sessions or transcript passages related to their stated interests. Recording, publication, retention, and deletion rules must be decided before this feature is built.

## Dash0: resource use and service capacity

Dash0 is the observability tool for the platform's engineering or operations team. It can collect and display telemetry such as metrics, traces, logs, and infrastructure resources. It should help the team understand whether transcription, translation, or API services are approaching capacity and where delays originate. [Dash0 dashboards](https://www.dash0.com/docs/dash0/dashboards/about-dashboards) can combine these signals; Kubernetes resource metrics are available when the services run on Kubernetes ([metric reference](https://www.dash0.com/docs/dash0/monitoring/kubernetes/kubernetes-metrics)).

### Signals to monitor

- CPU, memory, and GPU use where applicable, by service and deployment;
- active streams, request volume, queue depth, and oldest queued-job age;
- speech-to-text and translation latency, including median and high-percentile delay;
- error, timeout, and retry rates; and
- capacity headroom and periods of sustained saturation.

These signals help operators diagnose bottlenecks and decide whether to shift, queue, or scale work. Dash0 observes and alerts on the system; it does not itself balance workloads or guarantee autoscaling. Load balancing or autoscaling behavior must be implemented in the application and hosting infrastructure.

### Organizer-facing capacity view

Organizers need actionable, event-level guidance such as “translation is delayed for two sessions” or “current capacity is nearing its limit,” rather than raw CPU charts. The product may present a curated status and capacity view based on operational telemetry. Direct access to the Dash0 account should be limited to authorized technical operators unless role permissions and the data shown are deliberately designed for organizers.

Telemetry must not contain raw audio, transcript text, attendee names, registration answers, or search terms. Use service and event dimensions only where their cardinality and privacy impact are understood; keep attendee-level identifiers out of operational metrics.

## Suggested initial scope

1. Create an event, a session, and a speaker.
2. Collect attendee learning interests and show organizers aggregate themes.
3. Let an organizer enable transcription and translation for a session.
4. Show session service status and basic latency/error information.
5. Collect optional session feedback and show aggregate results.

Room recommendations, floor-plan optimization, remote watch parties, newsletters, personalized RSS, and transcript search analytics are candidate follow-up features, not assumptions for the first release.

## Questions to resolve with the project team

- Who is the operational user for Dash0: the organizer, a technical operator, or both?
- Which hosting environment will run the app, and can Dash0 receive host/container or Kubernetes resource metrics there?
- What workload action should follow a capacity warning: queue work, reduce quality, move sessions, or scale services?
- What does “session success” mean, and which signals can support that conclusion without implying learning or retention we have not measured?
- What permissions govern recording, transcript access, publication, retention, and deletion?
