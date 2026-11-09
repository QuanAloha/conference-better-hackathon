# Conference Companion

An early-stage hackathon project exploring tools that make conferences easier to attend and run.

## Project direction

### AI workshop transcription agent — leading idea

Help attendees get more value from workshops by turning a session recording into a searchable, useful summary. Before the event, an attendee could choose what they want to learn. After a session, the agent could provide a transcript, a concise summary, key takeaways, and answers grounded in that session.

Organizers could review aggregated, opt-in feedback to see which topics resonated and where attendees still had questions. This creates a possible organizer product alongside the attendee experience.

**Why explore this first:** it has a clear attendee benefit and a focused first version: upload or record one session, transcribe it, and produce a session summary. Personalization and organizer analytics can follow if that proves useful.

**Questions to validate:**

- Will attendees use a transcript, a summary, or ask questions about the session?
- Can we get permission to record and process workshop audio?
- How should speakers and attendees control access, retention, and deletion?
- Would organizers pay for attendee insights, and what feedback is useful without identifying individuals?

### Other concepts

| Idea | Who it helps | Core value | Main question |
| --- | --- | --- | --- |
| Dock scheduler | Event logistics teams and delivery drivers | Coordinate loading-dock arrival and departure times; help drivers use wait time productively | Is dock congestion frequent and costly enough to justify a dedicated tool? |
| Conference hallway sharing | Attendees | Share GitHub profiles, projects, LinkedIn pages, and portfolios with nearby people | What makes this more useful than exchanging a QR code or using existing event apps? |

## Suggested first prototype

1. Pick one workshop and obtain consent to use its audio.
2. Generate a transcript and a short, structured summary with key takeaways.
3. Let a participant ask questions answered from that session, with references to transcript timestamps.
4. Ask participants for optional feedback about what they hoped to learn and whether the session met that goal.

Keep the initial prototype small. Validate the attendee workflow before building organizer dashboards or conference-wide analytics.

## Local development with Docker Compose

The starter stack contains five services:

| Service | Purpose | Local address |
| --- | --- | --- |
| React frontend (served by Nginx) | Conference Companion interface | [http://localhost:3000](http://localhost:3000) |
| FastAPI backend | API and service configuration | [http://localhost:8000/docs](http://localhost:8000/docs) |
| PostgreSQL | Persistent relational data | `localhost:5432` |
| WhisperLive | CPU-based live speech transcription | `localhost:9090` |
| LibreTranslate | Self-hosted translation API | [http://localhost:5000](http://localhost:5000) |

### Start the stack

1. Install Docker Desktop or Docker Engine with the Compose plugin.
2. Optionally copy `.env.example` to `.env` and change the local ports or database password.
3. From the project root, run:

   ```sh
   docker compose up --build
   ```

The first start downloads container images and Whisper/translation language models, so it can take a while. Model files and database data persist in Docker volumes. Stop the stack with `Ctrl+C`, or run `docker compose down`. To also remove persisted database and model data, run `docker compose down --volumes`.

The frontend proxies `/api/` requests to FastAPI. The API health endpoint is `/api/health`; it checks PostgreSQL and reports the configured internal URLs for WhisperLive and LibreTranslate. Containers reach one another by Compose service name, so the backend uses `postgres`, `whisperlive`, and `libretranslate` as hostnames.

WhisperLive uses its upstream CPU image, which does not require a GPU. The image is published for Linux AMD64, so Compose explicitly selects that platform; on Apple Silicon, Docker Desktop runs it under emulation and transcription will be slower. The service downloads the model on first use. See [WhisperLive's Docker instructions](https://github.com/collabora/WhisperLive#whisper-live-server-in-docker) and [LibreTranslate's installation guide](https://docs.libretranslate.com/guides/installation/).

### Project integrations

Dash0 and Gitar are not in the five-container application stack. Dash0 can receive OpenTelemetry data from the backend once observability credentials and the desired dataset are configured; keep its token in environment secrets and avoid sending audio or transcript content as telemetry. See [Dash0's Python getting-started guide](https://www.dash0.com/docs/dash0/opentelemetry/distributions/python/getting-started).

Gitar connects to the GitHub repository through its GitHub App to review pull requests and can validate requested fixes against CI. A repository administrator must authorize that app in GitHub. See [Gitar's setup guide](https://www.sonarsource.com/developers/blueprints/get-started-with-gitar/).
