<script setup>
import { ref, watch } from 'vue'
import FPLColorSwatches from '@/components/FPLColorSwatches.vue'
import BaseButtonIcon from '@/components/BaseButtonIcon.vue'
import ExitIcon from '@/components/icons/ExitIcon.vue'
import messengerImg from '@/assets/fpl/messenger.png'
import ruterImg from '@/assets/fpl/Ruter.png'
import fplFrontpageImg from '@/assets/fpl/fpl frontpage.png'
import hjemImg from '@/assets/fpl/Hjem.png'
import spillereImg from '@/assets/fpl/Spillere.png'
import spillereTabellImg from '@/assets/fpl/Spillere tabellvisning.png'
import spillereFiltrerImg from '@/assets/fpl/Spillere filtrer runder.png'
import spillere3SisteImg from '@/assets/fpl/Spillere filtrer 3 siste rundene.png'
import kamperImg from '@/assets/fpl/Kamper.png'
import kamperFargeneImg from '@/assets/fpl/Kamper Hva betyr fargene.png'
import kamperFiltrerImg from '@/assets/fpl/Kamper filtrer runder.png'
import kamperSortertImg from '@/assets/fpl/Kamper sortert og filtrert.png'

const lightboxSrc = ref(null)
const lightboxRef = ref(null)

watch(lightboxSrc, (src) => {
  if (src) lightboxRef.value?.showModal()
  else lightboxRef.value?.close()
})

function onImgClick(e) {
  const img = e.target.closest('img')
  if (img) lightboxSrc.value = img.src
}
</script>

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

    <div class="content-wrap" @click="onImgClick">
      <RouterLink to="/" class="back-link">← Tilbake til fremsiden</RouterLink>

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
        <figure class="screenshot-messenger">
          <img :src="messengerImg" alt="Skjermdumper fra messenger chat" />
          <figcaption class="screenshot-caption">Skjermdumper fra messenger chat</figcaption>
        </figure>
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
        <div class="screenshot-pair">
          <figure class="screenshot-frame">
            <img :src="ruterImg" alt="Skjermdump fra Ruter-app" />
            <figcaption class="screenshot-caption">Skjermdump fra Ruter-app</figcaption>
          </figure>
          <figure class="screenshot-frame">
            <img :src="fplFrontpageImg" alt="Skjermdump fra offisielle FPL-app" />
            <figcaption class="screenshot-caption">Skjermdump fra offisielle FPL-app</figcaption>
          </figure>
        </div>
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
        <div class="screenshot-single">
          <img :src="hjemImg" alt="App-skjerm: Hjem" />
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
        <div class="screenshot-pair">
          <figure class="screenshot-frame">
            <img :src="spillereImg" alt="Spillere - kortvisning" />
          </figure>
          <figure class="screenshot-frame">
            <img :src="spillereTabellImg" alt="Spillere - tabellvisning" />
          </figure>
        </div>
        <p>
          Ved å filtrere på runder, kan man velge enten de 3 siste eller 5 siste rundene så man ser
          hvor mange poeng, mål, assist, xG etc. en spiller har hatt i det siste. Dette gir en
          pekepinn på hvor gode de har vært i det siste.
        </p>
        <div class="screenshot-pair">
          <figure class="screenshot-frame">
            <img :src="spillereFiltrerImg" alt="Spillere - filtrer runder" />
          </figure>
          <figure class="screenshot-frame">
            <img :src="spillere3SisteImg" alt="Spillere - 3 siste rundene" />
          </figure>
        </div>
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
        <div class="screenshot-pair">
          <figure class="screenshot-frame">
            <img :src="kamperImg" alt="Kamper" />
          </figure>
          <figure class="screenshot-frame">
            <img :src="kamperFargeneImg" alt="Kamper - hva betyr fargene" />
          </figure>
        </div>
        <p>
          I eksempelet vises de 3 neste rundene og kampene er sortert på hvor lette de er. Med denne
          oversikten kan det tyde på at bl.a. Arsenal og Crystal Palace er gode valg å hente
          spillere fra siden kampprogrammet deres er enkelt fremover. Hvis man skulle gjort dette
          uten filter og sortering ville det tatt sin tid ettersom man må scrolle opp og ned for å
          sammenligne hvem som har de letteste kampene fremover.
        </p>
        <div class="screenshot-pair">
          <figure class="screenshot-frame">
            <img :src="kamperFiltrerImg" alt="Kamper - filtrer runder" />
          </figure>
          <figure class="screenshot-frame">
            <img :src="kamperSortertImg" alt="Kamper - sortert og filtrert" />
          </figure>
        </div>
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
          For typografien har jeg valgt å gå for <strong>Outfit</strong>, da denne fonten ikke er så
          ulik Premier League sin egen font. Det skaper gjenkjennelse, og fonten har flotte
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
        <FPLColorSwatches />

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
          til å bli et mer komplett verktøy for FPL, basert på snakk og innsikt fra venner, kolleger
          og Reddit. Veien videre for dette prosjektet vil være å brukerteste designet i form av en
          prototype for å se om det løser problemer med deadline og hjelper managere til å planlegge
          hvilke spillere de vil ha på laget sitt.
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

      <RouterLink to="/" class="back-link back-link--bottom">← Tilbake til fremsiden</RouterLink>
    </div>
  </main>

  <dialog
    ref="lightboxRef"
    class="lightbox"
    @close="lightboxSrc = null"
    @click="lightboxSrc = null"
  >
    <BaseButtonIcon class="lightbox-close" @click.stop="lightboxSrc = null" aria-label="Lukk">
      <ExitIcon />
    </BaseButtonIcon>
    <img :src="lightboxSrc" alt="" class="lightbox-img" @click.stop />
  </dialog>
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
  max-width: 540px;
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
  max-width: 540px;
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

.back-link--bottom {
  margin-top: 1rem;
  margin-bottom: 0;
}

/* ─── Sections ─── */
.case-section {
  margin-bottom: 4rem;
}

.case-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  color: #222;
}

.case-section h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0 0.75rem;
  color: #222;
}

.case-section p {
  line-height: 1.75;
  color: #222;
  font-size: 18px;
  margin: 0 0 1rem;
}

/* ─── Blockquote ─── */
blockquote {
  margin: 1.5rem 0;
  padding: 1.25rem 1.5rem;
  border-radius: 0 8px 8px 0;
}

blockquote p {
  font-style: italic;
  padding: 0 20px;
  color: #2b0a47;
  border-left: 2px solid #8b60ad;
}

blockquote cite {
  padding: 0 20px;
  font-size: 0.85rem;
  color: #3d195b;
  font-style: normal;
}

/* ─── Nav path ─── */
.breadcrumb-path {
  border: 1px dashed #e5e5e5;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  color: #333;
  margin: 1rem 0 1.5rem;
  text-align: center;
}

/* ─── Screenshots ─── */
.screenshot-pair {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.screenshot-frame {
  flex: 1;
  min-width: 0;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 0;
}

.screenshot-frame img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: block;
  cursor: zoom-in;
}

.screenshot-caption {
  font-size: 0.75rem;
  color: #3f455e;
  text-align: center;
}

.screenshot-single {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.screenshot-single img {
  width: 100%;
  max-width: 300px;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  display: block;
  cursor: zoom-in;
}

.screenshot-messenger {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 1.5rem 0;
}

.screenshot-messenger img {
  width: 100%;
  max-width: 300px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: block;
  cursor: zoom-in;
}

/* ─── Design tokens ─── */
.spacing-demo {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.25rem;
  background: #fff;
  border-radius: 12px;
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
  background: #3d195b;
}

/* ─── Mobile ─── */
@media (max-width: 600px) {
  .hero {
    padding: 3rem 1.25rem;
  }

  .content-wrap {
    padding: 2rem 1.25rem 5rem;
  }

  .spacing-demo {
    gap: 0.75rem;
  }

  .screenshot-pair {
    gap: 12px;
  }
}

/* ─── Lightbox ─── */
.lightbox {
  border: none;
  background: transparent;
  max-width: 90vw;
  max-height: 90vh;
  padding: 0;
}

.lightbox::backdrop {
  background: rgba(0, 0, 0, 0.85);
  cursor: zoom-out;
}

.lightbox-close {
  position: fixed;
  top: 1rem;
  right: 1rem;
}

.lightbox-img {
  display: block;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 16px;
  object-fit: contain;
}
</style>
