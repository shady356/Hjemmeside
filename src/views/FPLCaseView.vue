<template>
  <main id="main-content" class="case-page">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-inner">
        <span class="hero-eyebrow">Design Case</span>
        <h1>Gjør FPL-hverdagen litt lettere</h1>
        <p class="hero-sub">
          Hvordan et klassisk FPL-problem ble til en design-idé som setter deadline øverst, gir
          relevant spillerstatistikk og gjør planlegging lettere.
        </p>
        <p class="hero-author">Henrik Oddløkken</p>
      </div>
    </div>

    <div class="content-wrap">
      <RouterLink to="/" class="back-link">← Tilbake</RouterLink>

      <!-- 1. Problem -->
      <section class="case-section">
        <h2>Jeg glemte deadline</h2>
        <p>
          Fantasy Premier League (FPL) er et spill hvor 10 millioner managere verden rundt setter
          opp virtuelle lag med ekte Premier League-spillere. Målet er å få mest mulig poeng basert
          på hvordan spillerne presterer på banen i det virkelige liv. Hvis Haaland scorer et mål
          får man 4 poeng for dette.
        </p>
        <p>
          Men det er allikevel noen problemer som saboterer managere gang på gang.
          <strong>Å rekke deadline.</strong>
        </p>
        <blockquote>
          <p>
            "I spent hours the entire week to decide which transfers to make, only to completly miss
            the early deadline. Peak FPL?"
          </p>
          <cite>— Reddit user</cite>
        </blockquote>
        <p>
          Dette er ikke en sjelden klage, det er en gjenganger på Reddit og blant venner som jeg
          spiller med.
        </p>
        <p>
          Når man glemmer deadline så er laget satt i stein og man kan ikke endre det før neste
          runde. Det gjør at man potensielt taper mange poeng ettersom man vil velge ut hvilke
          spillere som kan gjøre det bra mot visse lag.
        </p>
        <blockquote>
          <p>
            "I don't get why people who have the app, don't have notifications turned on, it boggles
            my mind"
          </p>
          <cite>— Reddit user</cite>
        </blockquote>
      </section>

      <!-- 2. Gjøre deadline synlig -->
      <section class="case-section">
        <h2>Gjøre deadline synlig</h2>
        <p>
          Den offisielle FPL-appen har innstillinger for nettopp dette, og jeg så selv at i min app
          var de slått av. For å komme seg til denne innstillingen må man trykke seg gjennom:
        </p>
        <div class="breadcrumb-path">
          More → myPL Settings → Notifications → Fantasy Premier League →
          <strong>Deadline reminders</strong>
        </div>
        <p>
          Jeg ble inspirert av hvordan Ruter har løst det i sin app. Selv husker jeg ikke alltid på
          om jeg har gyldig billett, derfor sjekker Ruter-appen fra tid til annen før jeg skal kjøre
          buss eller T-bane. Når jeg åpner appen så viser den hvor mange dager som gjenstår.
        </p>
        <p>
          I den offisielle FPL-appen vises også deadline-datoen i appen, men blir overskygget av
          hvor mange poeng du fikk denne runden (Game week).
        </p>
      </section>

      <!-- 3. Design av app -->
      <section class="case-section">
        <h2>Design av app</h2>
        <p>
          Fremsiden viser en enkel oversikt over når neste runde starter samt at man kan få et
          varsel på 1 time før runden starter. Jeg valgte 1 time fordi det er nok tid til å faktisk
          gjøre noe med det. 30 minutter kan være for lite hvis du er midt i noe, mens en dag før
          kan føles for tidlig til at det haster.
        </p>
        <p>
          Det er brukt farger fra Premier League sin profil for å gjøre det mer velkjent for
          managere. Den sterke lilla fargen for deadline-kortet gjør at den står ut i forhold til de
          to andre kortene som er mer sekundære valg. Disse kortene, "Spillere" og "Kamper" er neste
          delen av appen jeg vil snakke om.
        </p>

        <div class="mockup-wrap">
          <div class="phone-screen" aria-label="App-skjerm: Hjem">
            <div class="screen-content">
              <p class="screen-greeting">God morgen, Manager 👋</p>

              <div class="deadline-card">
                <p class="card-label">Runde 26 starter</p>
                <p class="card-date">10. februar kl. 19:00</p>
                <p class="card-days">3 dager igjen</p>
                <div class="card-divider"></div>
                <div class="card-toggle-row">
                  <span>Få varsel 1 time før runden starter</span>
                  <div class="toggle on" aria-hidden="true"></div>
                </div>
              </div>

              <div class="nav-card">
                <div class="nav-icon teal">👕</div>
                <div class="nav-text">
                  <p class="nav-title">Se spillere</p>
                  <p class="nav-desc">Form, poeng totalt, xG og mer</p>
                </div>
                <span class="nav-arrow" aria-hidden="true">→</span>
              </div>

              <div class="nav-card">
                <div class="nav-icon blue">⚽</div>
                <div class="nav-text">
                  <p class="nav-title">Se kamper</p>
                  <p class="nav-desc">Sorter lagene etter vanskelighetsgrad</p>
                </div>
                <span class="nav-arrow" aria-hidden="true">→</span>
              </div>
            </div>
            <div class="bottom-nav" aria-hidden="true">
              <span class="nav-item active">🏠 Hjem</span>
              <span class="nav-item">👕 Spillere</span>
              <span class="nav-item">⚽ Kamper</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Relevant data -->
      <section class="case-section">
        <h2>Relevant data, ikke bare sesongstatistikk</h2>
        <p>
          En ting den offisielle Premier League appen ikke viser alltid like godt er hva som er
          relevant <em>akkurat nå</em>.
        </p>
        <p>
          I designet vises spillerne i enten kort eller tabell. Dette er for å gi managere valget
          for hvordan de vil lese statistikken. Kortdesign gir en enkel og rask skanning ved å
          scrolle gjennom de forskjellige statistikkene, mens tabell gir bedre oversikt til å
          sammenligne spillere.
        </p>
        <p>
          Form er riktig nok en statistikk som er vist i den offisielle appen og den er relevant.
          Derimot ville det vært fint å se hvor mange poeng, mål, assist etc. en spiller har fått de
          seneste kampene, ikke bare over hele sesongen. Derfor har jeg lagt inn et ekstra filter
          hvor man kan filtrere på Runder.
        </p>

        <div class="mockup-wrap">
          <div class="phone-screen" aria-label="App-skjerm: Spillere">
            <div class="screen-content">
              <div class="screen-header">
                <span class="screen-title">Spillere</span>
                <div class="view-toggles" aria-hidden="true">
                  <span class="view-toggle active">⊞</span>
                  <span class="view-toggle">≡</span>
                </div>
              </div>
              <div class="filter-row" aria-hidden="true">
                <span class="filter-chip">Alle lag ▾</span>
                <span class="filter-chip">Alle posisjoner ▾</span>
                <span class="filter-chip">3 siste runder ▾</span>
              </div>

              <div class="stat-group">
                <div class="stat-label">
                  Form
                  <span class="stat-sub">Gjennomsnittlig poeng fra de siste rundene</span>
                </div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #e8d5f0"></div>
                  <div class="player-info">
                    <span class="player-name">Gabriel</span>
                    <span class="player-meta">Arsenal · Forsvar</span>
                  </div>
                  <span class="player-val">10,6</span>
                </div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #f0d5d5"></div>
                  <div class="player-info">
                    <span class="player-name">Pedro</span>
                    <span class="player-meta">Chelsea · Angrep</span>
                  </div>
                  <span class="player-val">6,3</span>
                </div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #d5e0f0"></div>
                  <div class="player-info">
                    <span class="player-name">Fernandes</span>
                    <span class="player-meta">Man Utd · Midtbane</span>
                  </div>
                  <span class="player-val">5,6</span>
                </div>
              </div>

              <div class="stat-group">
                <div class="stat-label">Poeng</div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #e8d5f0"></div>
                  <div class="player-info">
                    <span class="player-name">Gabriel</span>
                    <span class="player-meta">Arsenal · Forsvar</span>
                  </div>
                  <span class="player-val">32</span>
                </div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #f0d5d5"></div>
                  <div class="player-info">
                    <span class="player-name">Pedro</span>
                    <span class="player-meta">Chelsea · Angrep</span>
                  </div>
                  <span class="player-val">19</span>
                </div>
                <div class="player-row">
                  <div class="player-avatar" style="background: #d5e0f0"></div>
                  <div class="player-info">
                    <span class="player-name">Fernandes</span>
                    <span class="player-meta">Man Utd · Midtbane</span>
                  </div>
                  <span class="player-val">17</span>
                </div>
              </div>
            </div>
            <div class="bottom-nav" aria-hidden="true">
              <span class="nav-item">🏠 Hjem</span>
              <span class="nav-item active">👕 Spillere</span>
              <span class="nav-item">⚽ Kamper</span>
            </div>
          </div>
        </div>

        <p>
          Ved å filtrere på runder, kan man velge enten de 3 siste eller 5 siste rundene så man ser
          hvor mange poeng, mål, assist, xG etc. en spiller har hatt i det siste. Dette gir en
          pekepinn på hvor gode de har vært i det siste.
        </p>
      </section>

      <!-- 5. Fixtures -->
      <section class="case-section">
        <h2>Se hvem som har lett vei fremover</h2>
        <p>
          Kampvisningen er veldig inspirert av den offisielle FPL sin såkalte Fixture Difficulty
          Rating (FDR). Det er en tabell som viser hvor vanskelige kamper hvert lag møter og er en
          av de viktigste verktøyene for å planlegge fremover. Designet er gjenkjennelig for
          managere siden det er brukt de samme fargene for å se vanskelighetsgrad på lagene. Enkelte
          farger var ikke helt godkjent i tråd med WCAG Fargekontrast AA, så de har blitt justert.
        </p>
        <p>
          Her har jeg valgt å legge til filter og sortering for å kunne se enkelte kamper i
          fremtiden samt at man kan sortere lagene etter hvor vanskelige motstanderne er. I tillegg,
          for de som ikke er vant med FPL, så er det nødvendig å forklare hva fargene betyr.
        </p>

        <div class="mockup-wrap">
          <div class="phone-screen" aria-label="App-skjerm: Kamper">
            <div class="screen-content">
              <div class="screen-header">
                <span class="screen-title">Kamper</span>
              </div>
              <div class="filter-row" aria-hidden="true">
                <span class="filter-chip">3 neste runder ▾</span>
                <span class="filter-chip">↕ Letteste kamper ▾</span>
              </div>

              <div class="fdr-legend" aria-label="Fargeskala: 1 er lettest, 5 er vanskeligst">
                <span class="fdr-chip fdr-1">1</span>
                <span class="fdr-chip fdr-2">2</span>
                <span class="fdr-chip fdr-3">3</span>
                <span class="fdr-chip fdr-4">4</span>
                <span class="fdr-chip fdr-5">5</span>
                <span class="fdr-scale-label">Lett</span>
                <span class="fdr-scale-label right">Vanskelig</span>
              </div>

              <div class="fdr-table-wrap">
                <table class="fdr-table">
                  <thead>
                    <tr>
                      <th>Lag</th>
                      <th>R26</th>
                      <th>R27</th>
                      <th>R28</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="team-cell">ARS</td>
                      <td><span class="fdr-cell fdr-1">BRE(B)</span></td>
                      <td><span class="fdr-cell fdr-1">WOL(B)</span></td>
                      <td><span class="fdr-cell fdr-3">TOT(H)</span></td>
                    </tr>
                    <tr>
                      <td class="team-cell">CRY</td>
                      <td><span class="fdr-cell fdr-1">BUR(H)</span></td>
                      <td><span class="fdr-cell fdr-1">WOL(H)</span></td>
                      <td><span class="fdr-cell fdr-3">MUN(H)</span></td>
                    </tr>
                    <tr>
                      <td class="team-cell">AVL</td>
                      <td><span class="fdr-cell fdr-3">BRI(H)</span></td>
                      <td><span class="fdr-cell fdr-2">LEE(H)</span></td>
                      <td><span class="fdr-cell fdr-2">WOL(A)</span></td>
                    </tr>
                    <tr>
                      <td class="team-cell">EVE</td>
                      <td><span class="fdr-cell fdr-3">BOU(H)</span></td>
                      <td><span class="fdr-cell fdr-3">MUN(H)</span></td>
                      <td><span class="fdr-cell fdr-3">NEW(H)</span></td>
                    </tr>
                    <tr>
                      <td class="team-cell">CHE</td>
                      <td><span class="fdr-cell fdr-3">LEE(H)</span></td>
                      <td><span class="fdr-cell fdr-4">BUR(H)</span></td>
                      <td><span class="fdr-cell fdr-4">ARS(H)</span></td>
                    </tr>
                    <tr>
                      <td class="team-cell">BRE</td>
                      <td><span class="fdr-cell fdr-5">ARS(H)</span></td>
                      <td><span class="fdr-cell fdr-5">BRI(H)</span></td>
                      <td><span class="fdr-cell fdr-5">BUR(H)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="bottom-nav" aria-hidden="true">
              <span class="nav-item">🏠 Hjem</span>
              <span class="nav-item">👕 Spillere</span>
              <span class="nav-item active">⚽ Kamper</span>
            </div>
          </div>
        </div>

        <p>
          I eksempelet vises de 3 neste rundene og kampene er sortert på hvor lette de er. Med
          denne oversikten kan det tyde på at bl.a. Arsenal og Crystal Palace er gode valg å hente
          spillere fra siden kampprogrammet deres er enkelt fremover. Hvis man skulle gjort dette
          uten filter og sortering ville det tatt sin tid ettersom man må scrolle opp og ned for å
          sammenligne hvem som har de letteste kampene fremover.
        </p>
      </section>

      <!-- 6. Design tokens -->
      <section class="case-section">
        <h2>Design tokens og stil</h2>
        <p>
          I dette prosjektet har jeg brukt en dus stil med pastellfarger basert på Premier League
          sin fargeprofil. Det er mye data som skal presenteres og da tenkte jeg at en myk stil
          ville være passende for at dataene ikke skal være for overveldende.
        </p>
        <p>
          For typografien har jeg valgt å gå for <strong>Outfit</strong>, da denne fonten ikke er
          så ulik Premier League sin egen font. Det skaper gjenkjennelse, og fonten har flotte
          geometriske former som ikke oppleves som hard. Det passer den myke stilen til fargene.
        </p>
        <p>
          For ikonene har jeg brukt Google Material Symbols med rund variant — runde former passer
          fint til Outfit-stilen. Komponentene er inspirert av Material Design, men justert med mer
          romslighet og runde former som mål.
        </p>
        <p>
          Ved å bruke design tokens passer jeg på at designet er konsekvent og ryddig. Dette gjør
          arbeidet langt lettere og eventuelt hvis andre vil være med på prosjektet over tid.
        </p>

        <h3>Farger</h3>
        <div class="color-grid">
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #26272c; border: 1px solid #ddd"></div>
            <div><p class="swatch-name">Tekst Primær</p><p class="swatch-hex">#26272C</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #3f455e"></div>
            <div><p class="swatch-name">Tekst Sekundær</p><p class="swatch-hex">#3F455E</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #cccccc"></div>
            <div><p class="swatch-name">Border</p><p class="swatch-hex">#CCCCCC</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #3d195b"></div>
            <div>
              <p class="swatch-name">Premier League</p><p class="swatch-hex">#3D195B</p>
            </div>
          </div>
          <div class="color-swatch">
            <div
              class="swatch-dot"
              style="background: #f3e5ff; border: 1px solid #e0d5ec"
            ></div>
            <div>
              <p class="swatch-name">Premier League Soft</p><p class="swatch-hex">#F3E5FF</p>
            </div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #ffffff; border: 1px solid #ddd"></div>
            <div><p class="swatch-name">Grå 100</p><p class="swatch-hex">#FFFFFF</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #f2f2f2; border: 1px solid #ddd"></div>
            <div><p class="swatch-name">Grå 200</p><p class="swatch-hex">#F2F2F2</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #e5e5e5"></div>
            <div><p class="swatch-name">Grå 300</p><p class="swatch-hex">#E5E5E5</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #cccccc"></div>
            <div><p class="swatch-name">Grå 400</p><p class="swatch-hex">#CCCCCC</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #0f49fc"></div>
            <div><p class="swatch-name">Kamper</p><p class="swatch-hex">#0F49FC</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #7efdff"></div>
            <div><p class="swatch-name">Kamper Lys</p><p class="swatch-hex">#7EFDFF</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #04f9a5"></div>
            <div><p class="swatch-name">Spillere</p><p class="swatch-hex">#04F9A5</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #81ffd4"></div>
            <div><p class="swatch-name">Spillere Lys</p><p class="swatch-hex">#81FFD4</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #375523"></div>
            <div><p class="swatch-name">FDR 1</p><p class="swatch-hex">#375523</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #04f9a5"></div>
            <div><p class="swatch-name">FDR 2</p><p class="swatch-hex">#04F9A5</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #cccccc"></div>
            <div><p class="swatch-name">FDR 3</p><p class="swatch-hex">#CCCCCC</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #ee5b80"></div>
            <div><p class="swatch-name">FDR 4</p><p class="swatch-hex">#EE5B80</p></div>
          </div>
          <div class="color-swatch">
            <div class="swatch-dot" style="background: #80072d"></div>
            <div><p class="swatch-name">FDR 5</p><p class="swatch-hex">#80072D</p></div>
          </div>
        </div>

        <h3>Spacing (px)</h3>
        <div class="spacing-demo">
          <div v-for="size in [4, 8, 12, 16, 20, 24, 32, 40, 48]" :key="size" class="spacing-item">
            <div class="spacing-box" :style="{ width: size + 'px', height: size + 'px' }"></div>
            <span class="token-label">{{ size }}</span>
          </div>
        </div>

        <h3>Border radius (px)</h3>
        <div class="radius-demo">
          <div v-for="r in [4, 8, 16, 24, 40]" :key="r" class="radius-item">
            <div class="radius-box" :style="{ borderRadius: r + 'px' }"></div>
            <span class="token-label">{{ r }}</span>
          </div>
        </div>
      </section>

      <!-- 7. Reflections -->
      <section class="case-section">
        <h2>Refleksjoner og veien videre</h2>
        <p>
          Dette prosjektet startet med ett konkret, observert problem. Derfra vokste det naturlig
          til å bli et mer komplett verktøy for FPL, basert på snakk og innsikt fra venner,
          kolleger og Reddit. Veien videre for dette prosjektet vil være å brukerteste designet i
          form av en prototype for å se om det løser problemer med deadline og hjelper managere til
          å planlegge hvilke spillere de vil ha på laget sitt.
        </p>
        <p>
          Hvis jeg skal være kritisk, så er jeg usikker på om det var en god idé å oversette kjente
          terminologier til norsk. Ordet "Gameweek" er veldig mye brukt i FPL. I denne appen valgte
          jeg å oversette det til "Runder", men det kunne likeså gjerne ha vært "Kamp-uke". Ordene
          "runder" og "kamper" kan skape litt forvirring og må antakelig ses på nytt for at de ikke
          blir brukt om hverandre.
        </p>
        <p>
          Istedenfor å designe en helt ny app, så kunne disse funksjonalitetene jeg har presentert
          her vært et forslag på et redesign av den offisielle FPL appen. Hvor man nettopp gjør
          oppmerksomheten rundt deadline mer synlig og flere måter å vise data på. Samtidig er det
          gøy å designe egne løsninger hvor man kan sette sitt preg og lære å lage et lite design
          system.
        </p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.case-page {
  background: #fdf8ef;
}

/* ─── Hero ─── */
.hero {
  background: #3d195b;
  color: #fff;
  padding: 4rem 2rem;
}

.hero-inner {
  max-width: 760px;
  margin: 0 auto;
}

.hero-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
}

.hero h1 {
  font-size: clamp(1.6rem, 5vw, 2.5rem);
  line-height: 1.2;
  margin: 0 0 1rem;
  color: #fff;
}

.hero-sub {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  max-width: 580px;
  margin: 0 0 1.5rem;
}

.hero-author {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ─── Content ─── */
.content-wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 2.5rem 2rem 6rem;
  box-sizing: border-box;
}

.back-link {
  display: inline-block;
  margin-bottom: 2.5rem;
  color: #3d195b;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
}

.back-link:hover {
  text-decoration: underline;
}

/* ─── Sections ─── */
.case-section {
  margin-bottom: 4rem;
}

.case-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: #26272c;
}

.case-section h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
  color: #26272c;
}

.case-section p {
  line-height: 1.75;
  color: #3f455e;
  margin: 0 0 1rem;
}

/* ─── Blockquote ─── */
blockquote {
  margin: 1.5rem 0;
  padding: 1.25rem 1.5rem;
  background: #f3e5ff;
  border-left: 4px solid #3d195b;
  border-radius: 0 8px 8px 0;
}

blockquote p {
  margin: 0 0 0.5rem;
  font-style: italic;
  color: #2b0a47;
}

blockquote cite {
  font-size: 0.85rem;
  color: #6a3a8a;
  font-style: normal;
}

/* ─── Nav path ─── */
.breadcrumb-path {
  background: #f2f2f2;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  color: #3f455e;
  margin: 1rem 0 1.5rem;
  text-align: center;
}

/* ─── Phone mockup ─── */
.mockup-wrap {
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}

.phone-screen {
  background: #fafafa;
  border-radius: 24px;
  border: 2px solid #e0e0e0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.screen-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.screen-greeting {
  font-size: 0.95rem;
  font-weight: 600;
  color: #26272c;
  margin: 4px 0 0;
}

/* ─── Deadline card ─── */
.deadline-card {
  background: #3d195b;
  color: #fff;
  border-radius: 16px;
  padding: 16px;
}

.card-label {
  font-size: 0.65rem;
  opacity: 0.75;
  margin: 0 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-date {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 4px;
}

.card-days {
  font-size: 0.78rem;
  opacity: 0.8;
  margin: 0;
}

.card-divider {
  border-top: 1px dashed rgba(255, 255, 255, 0.3);
  margin: 12px 0;
}

.card-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.73rem;
  gap: 8px;
}

.toggle {
  flex-shrink: 0;
  width: 36px;
  height: 20px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
}

.toggle::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  top: 2px;
  left: 2px;
}

.toggle.on {
  background: #4fc3f7;
}

.toggle.on::after {
  left: 18px;
}

/* ─── Nav cards ─── */
.nav-card {
  background: #fff;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.nav-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.nav-icon.teal {
  background: #c3f7e5;
}

.nav-icon.blue {
  background: #dde8ff;
}

.nav-text {
  flex: 1;
}

.nav-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: #26272c;
  margin: 0;
}

.nav-desc {
  font-size: 0.7rem;
  color: #3f455e;
  margin: 0;
}

.nav-arrow {
  color: #3f455e;
  font-size: 0.9rem;
}

/* ─── Screen header ─── */
.screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
}

.screen-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #26272c;
}

.view-toggles {
  display: flex;
  gap: 6px;
}

.view-toggle {
  font-size: 0.9rem;
  opacity: 0.35;
}

.view-toggle.active {
  opacity: 1;
  color: #3d195b;
}

/* ─── Filters ─── */
.filter-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.filter-chip {
  font-size: 0.68rem;
  padding: 4px 8px;
  background: #fff;
  border: 1px solid #cccccc;
  border-radius: 100px;
  color: #3f455e;
  white-space: nowrap;
}

/* ─── Player list ─── */
.stat-group {
  background: #fff;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: #26272c;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-sub {
  font-size: 0.66rem;
  font-weight: 400;
  color: #3f455e;
}

.player-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.player-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  flex-shrink: 0;
}

.player-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.player-name {
  font-size: 0.76rem;
  font-weight: 600;
  color: #26272c;
}

.player-meta {
  font-size: 0.66rem;
  color: #3f455e;
}

.player-val {
  font-size: 0.82rem;
  font-weight: 700;
  color: #26272c;
}

/* ─── FDR ─── */
.fdr-legend {
  display: flex;
  align-items: center;
  gap: 4px;
}

.fdr-chip {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.fdr-scale-label {
  font-size: 0.66rem;
  color: #3f455e;
  margin: 0 2px;
}

.fdr-scale-label.right {
  margin-left: auto;
}

.fdr-table-wrap {
  overflow-x: auto;
}

.fdr-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.7rem;
}

.fdr-table th {
  text-align: left;
  padding: 4px 4px;
  color: #3f455e;
  font-weight: 600;
  border-bottom: 1px solid #e5e5e5;
}

.fdr-table td {
  padding: 4px 2px;
}

.team-cell {
  font-weight: 700;
  color: #26272c;
  padding-left: 0 !important;
  white-space: nowrap;
}

.fdr-cell {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.66rem;
  white-space: nowrap;
}

.fdr-1 {
  background: #375523;
  color: #fff;
}
.fdr-2 {
  background: #04f9a5;
  color: #1a3a2a;
}
.fdr-3 {
  background: #cccccc;
  color: #333;
}
.fdr-4 {
  background: #ee5b80;
  color: #fff;
}
.fdr-5 {
  background: #80072d;
  color: #fff;
}

/* ─── Bottom nav ─── */
.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 10px 16px 14px;
  border-top: 1px solid #e5e5e5;
  background: #fafafa;
}

.nav-item {
  font-size: 0.68rem;
  color: #3f455e;
}

.nav-item.active {
  color: #3d195b;
  font-weight: 600;
}

/* ─── Design tokens ─── */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.color-swatch {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.swatch-dot {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  flex-shrink: 0;
}

.swatch-name {
  font-size: 0.78rem;
  font-weight: 600;
  color: #26272c;
  margin: 0;
}

.swatch-hex {
  font-size: 0.72rem;
  color: #3f455e;
  margin: 0;
  font-family: monospace;
}

.spacing-demo {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  background: #fff;
  border-radius: 12px;
  padding: 1.25rem;
  border: 1px solid #e5e5e5;
}

.spacing-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.spacing-box {
  background: #3d195b;
  border-radius: 3px;
  min-width: 4px;
  min-height: 4px;
}

.token-label {
  font-size: 0.7rem;
  color: #3f455e;
  font-family: monospace;
}

.radius-demo {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  padding: 1.25rem;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  align-items: center;
}

.radius-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.radius-box {
  width: 56px;
  height: 56px;
  background: #f3e5ff;
  border: 2px solid #3d195b;
}

/* ─── Mobile ─── */
@media (max-width: 600px) {
  .hero {
    padding: 3rem 1.25rem;
  }

  .content-wrap {
    padding: 2rem 1.25rem 5rem;
  }

  .color-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .spacing-demo {
    gap: 0.75rem;
  }
}
</style>
