import classes from "./templatePage.module.css";
import { Link } from "react-router-dom";

const PregnancyPanic = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes["page-container"]}>
          <h1>The Pregnancy Panic Companion</h1>
          <p>
            Take a few deep breaths (really: do some good, slow breathing,{" "}
            you'll feel better and be able to think more clearly once you do ),
            and have a seat. Based on your unique situation, we'll walk you
            through your next steps, give you some extra helps, fill you in on
            some common self-sabotagers, and do our best to help you chill out
            and pull it together so you can get through a scare without losing
            your mind and your well-being in the process.
          </p>
          <h4>
            <strong>
              Is your (or a{" "}
              <a
                href="https://www.scarleteen.com/glossary#partner"
                title='In a sexual context, a person with whom someone is having some kind of sex. The term "partner" can be used for all kinds of relationships, not just serious ones. "Partner" can also mean the person someone is with in a romantic or familial partnership.'
                class="lexicon-term"
              >
                partner
              </a>
              's or friend's){" "}
              <a
                href="https://www.scarleteen.com/glossary#menstrual"
                title="Having to do with menstruation."
                class="lexicon-term"
              >
                menstrual
              </a>{" "}
              <a
                href="https://www.scarleteen.com/glossary#period"
                title='The fluid, which contains blood, from the shedding of the uterine lining usually at the end of each fertility cycle. Or, that flow you perhaps may have experienced once while shouting, "Oh thank GAWD!"'
                class="lexicon-term"
              >
                period
              </a>{" "}
              not yet due?
            </strong>
            <p>
              In other words, a period isn't late or missed, because it's not
              even due for another few days or weeks.{" "}
              <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_a_period_isnt_late_or_missed">
                Click here for your next steps.
              </a>
            </p>
          </h4>

          <h4>
            <strong>
              Are you (or a partner or friend's) due for a menstrual period
              around now, but it's not late yet?
            </strong>
            <br />
            <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_a_period_isnt_late_or_missed">
              Click here for your next steps.
            </a>
          </h4>
          <p>
            <div className={classes.pullquote}>
              <hr />
              <div className={classes.quotecontent}>
                <strong>
                  Has it been less than 120 hours since your risk?{" "}
                </strong>{" "}
                If you would like to reduce your risk, you can use a method of{" "}
                <a
                  href="https://www.scarleteen.com/glossary#emergency_contraception"
                  title="A method of contraception used to prevent pregnancy after sex or rape has already occurred, rather than used before or during, like most types of contraception."
                  class="lexicon-term"
                >
                  emergency contraception
                </a>{" "}
                (EC) to reduce the risk by as much as 95% with oral medications
                designed as EC, and as much as 98% using a copper{" "}
                <a
                  href="https://www.scarleteen.com/glossary#IUD"
                  title="Intra-uterine device. A long-term birth control method inserted into the uterus by a healthcare provider. Also called an IUS or IUC."
                  class="lexicon-term"
                >
                  IUD
                </a>
                . EC is most effective when used within 24 hours, so you want to
                get a move on if you can and want to use it. For information on
                emergency contraception,{" "}
                <strong>
                  <a href="http://www.scarleteen.com/birth_control_bingo_emergency_contraception">
                    click here
                  </a>
                </strong>
                . To find the kinds of EC available in your area, or which kinds
                of{" "}
                <a
                  href="https://www.scarleteen.com/glossary#oral_contraceptives"
                  title="Hormonal medications, taken by mouth daily, used to prevent unwanted pregnancy. Another name for birth control pills."
                  class="lexicon-term"
                >
                  oral contraceptives
                </a>{" "}
                you can use as emergency contraception, and how to use them that
                way,{" "}
                <strong>
                  <a href="http://ec.princeton.edu/">click here</a>
                </strong>
                . <strong>Not sure if you have had a real risk or not?</strong>{" "}
                Check the{" "}
                <a
                  href="https://www.scarleteen.com/glossary#bottom"
                  title="Either a colloquial term for buttocks or even the whole genital area, or someone who wants to consensually relinquish control or active leadership during sex to a partner and follow their lead."
                  class="lexicon-term"
                >
                  bottom
                </a>{" "}
                of this page for that information.
              </div>
              <hr />
            </div>
          </p>
          <p>
            <img
              alt=""
              src="https://www.scarleteen.com/sites/default/files/PeriodCalendarV2.webp"
              style={{
                width: "400px",
                height: "169px",
                float: "left",
              }}
            />
          </p>
          <h4>
            <strong>
              Are you (or a partner or friend) currently experiencing a late or
              missed menstrual period?
            </strong>
          </h4>
          <p>
            In other words, a menstrual period has not yet arrived and was
            expected at least five or more days ago.{" "}
            <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_a_period_is_late_or_missed">
              <strong>Click here for your next steps.</strong>
            </a>
          </p>
          <h4>
            <strong>
              Do you (or a partner or friend) have irregular periods, so you
              can't really answer the questions above?
            </strong>
          </h4>
          <p>
            If your (or your partner's) menstrual periods are irregular, or you
            (or your partner) use a method of contraception that often causes
            skipped or missed periods,{" "}
            <strong>
              <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_periods_are_irregular">
                click here for your next steps.
              </a>
            </strong>
          </p>
          <h4>
            <strong>
              Have you (or a partner or friend) had a menstrual period since the
              risk you are concerned about?
            </strong>
          </h4>
          <p>
            A menstrual period is happening now or has occurred since the risk
            you're concerned about, but you're still worried about pregnancy.{" "}
            <strong>
              <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_youve_had_a_period">
                Click here for your next steps.
              </a>
            </strong>
          </p>
          <h4>
            <strong>
              Have you (or a partner or friend) had a{" "}
              <a
                href="https://www.scarleteen.com/glossary#pregnancy_test"
                title="What we tell you to take when you ask us if you&#039;re pregnant. A test that can be done at home or by a healthcare provider to determine pregnancy. Usually a urine test, a pregnancy test measures for a specific hormone, hCG, only produced with pregnancy. "
                class="lexicon-term"
              >
                pregnancy test
              </a>{" "}
              with a positive (pregnant) result?
            </strong>
          </h4>
          <p>
            <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_a_pregnancy_test_is_positive">
              <strong>Click here for your next steps.</strong>
            </a>
          </p>
          <h4>
            <strong>
              Have you (or a partner or friend) had a pregnancy test with a
              negative (not pregnant) result?
            </strong>
          </h4>
          <p>
            <strong>
              <a href="http://www.scarleteen.com/the_pregnancy_panic_companion_when_a_pregnancy_test_is_negative">
                Click here for your next steps.
              </a>
            </strong>
          </p>
          <hr />
          <h5>
            Not sure if you or someone else have/has had a real risk of
            pregnancy or not?
          </h5>
          <p>
            <strong>
              <img
                alt=""
                src="https://www.scarleteen.com/sites/default/files/PregnancyTestScene.webp"
                style={{
                  width: "400px",
                  height: "397px",
                  float: "right",
                  marginLeft: "24px",
                }}
              />
              In order for pregnancy to be a possibility, the kind of contact
              that has to happen is:
            </strong>
          </p>
          <ul>
            <li>
              <strong>Direct</strong> (with no clothing, at all, covering
              anyone's{" "}
              <a
                href="https://www.scarleteen.com/glossary#genitals"
                title="Body parts that are generally, culturally, scientifically or personally considered to be external sexual or reproductive organs."
                class="lexicon-term"
              >
                genitals
              </a>
              ) genital-to-genital contact between someone with a{" "}
              <a
                href="https://www.scarleteen.com/glossary#penis"
                title="One of the two external reproductive organs of people assigned male at birth."
                class="lexicon-term"
              >
                penis
              </a>{" "}
              and someone with a{" "}
              <a
                href="https://www.scarleteen.com/glossary#vulva"
                title="The name for the external genitals of people assigned female at birth. The vulva includes the mons, external clitoris, inner and outer labia, fourchette and perineum."
                class="lexicon-term"
              >
                vulva
              </a>
              , such as genital{" "}
              <a
                href="https://www.scarleteen.com/glossary#intercourse"
                title="When people interlock their genitals and move together as feels good to them for the purpose of sexual stimulation and/or reproduction."
                class="lexicon-term"
              >
                intercourse
              </a>{" "}
              or otherwise rubbing genitals together OR
            </li>
            <li>
              <strong>Direct</strong> contact with ejaculate (
              <a
                href="https://www.scarleteen.com/glossary#semen"
                title='Fluid which comes from the urethra of the penis during ejaculation, and which usually contains sperm. Sperm cells are only about 2-5% of what&#039;s in semen: semen also contains amino acids, enzymes, flavins, fructose, prostaglandins, proteins, acids and other elements. In human reproduction, semen both helps sperm "swim," and counteract the acidic nature of the vagina, which would otherwise be hostile to sperm.'
                class="lexicon-term"
              >
                semen
              </a>
              ) and the vulva,{" "}
              <a
                href="https://www.scarleteen.com/glossary#vaginal_opening"
                title="The external opening to the vagina."
                class="lexicon-term"
              >
                vaginal opening
              </a>{" "}
              or{" "}
              <a
                href="https://www.scarleteen.com/glossary#anus"
                title="The external opening to the rectum, located between the buttocks.
"
                class="lexicon-term"
              >
                anus
              </a>
              .
            </li>
          </ul>
          <p>
            <strong>BUT (and it's a really big one): </strong>If either of those
            kinds of contact did occur, but one or more{" "}
            <a href="http://www.scarleteen.com/article/sexual_health/birth_control_bingo">
              reliable methods of contraception
            </a>{" "}
            was used properly, that risk is radically reduced, by a minimum of
            70%*, and as much as 99.9%. And even if you{" "}
            <a href="http://www.scarleteen.com/article/sexual_health/the_buddy_system_effectiveness_rates_for_backing_up_your_birth_control_with_a_">
              used two methods
            </a>
            , any two reliable methods at all -- like{" "}
            <a
              href="https://www.scarleteen.com/glossary#the_pill"
              title="A common term for birth control pills/oral contraceptives. A hormonal medication used to prevent unwanted pregnancy."
              class="lexicon-term"
            >
              the pill
            </a>{" "}
            plus{" "}
            <a
              href="https://www.scarleteen.com/glossary#withdrawal"
              title='A method of birth control which involves the person with the penis "pulling out" of a vagina well before ejaculation and ejaculating away from a partner&#039;s genitals.'
              class="lexicon-term"
            >
              withdrawal
            </a>
            , or a{" "}
            <a
              href="https://www.scarleteen.com/glossary#condom"
              title="A thin sheath or tube of latex or another material, worn over the penis during sex to prevent or reduce the risk of pregnancy and/or sexually transmitted infections.
"
              class="lexicon-term"
            >
              condom
            </a>{" "}
            plus a Depo shot -- only typically, rather than perfectly, you still
            will only have had about a 10% risk of pregnancy at a maximum.
          </p>
          <p>
            <strong>Scenarios like these are NOT how pregnancy happens:</strong>
          </p>
          <ul>
            <li>
              Masturbation or{" "}
              <a
                href="https://www.scarleteen.com/glossary#mutual_masturbation"
                title='When sexual partners masturbate together.  Sometimes people also use "mutual masturbation" to mean manual sex (fingering or handjobs) done at the same time.'
                class="lexicon-term"
              >
                mutual masturbation
              </a>{" "}
              (masturbating in the same space with someone else)
            </li>
            <li>
              Being in the same space as someone with a penis and doing things
              like using their towels, sharing a a toilet, touching their
              clothing, or sharing a bed to sleep or rest in
            </li>
            <li>Sitting somewhere where someone did or may have ejaculated</li>
            <li>Taking a shower, bath or swim with someone with a penis</li>
            <li>
              Thinking about{" "}
              <a
                href="https://www.scarleteen.com/glossary#sex"
                title="Different things people choose to do to actively express or enact sexuality and sexual feelings; often this involves genitals, but not always. The word sex also means a way people, animals or plants are classified based on their chromosomes, genitals or reproductive organs."
                class="lexicon-term"
              >
                sex
              </a>{" "}
              or fantasizing
            </li>
            <li>
              Kissing,{" "}
              <a
                href="https://www.scarleteen.com/glossary#making_out"
                title="A vague term, but often a session of extended activity that includes passionate or deep kissing, some kind of other body contact and may even include other kinds of sex, like manual sex (fingering or handjobs)."
                class="lexicon-term"
              >
                making out
              </a>{" "}
              or fondling
            </li>
            <li>
              Dry humping (rubbing genitals together when one or more people
              involved have some kind of clothing on that covers the genitals)
            </li>
            <li>
              Oral sex or{" "}
              <a
                href="https://www.scarleteen.com/glossary#manual_sex"
                title='Sometimes also called digital sex. Kinds of sex involving the hands and fingers to sexually stimulate the genitals or other parts of the body. Fingering, handjobs or "fisting" (deep manual sex) are some kinds of manual sex.'
                class="lexicon-term"
              >
                manual sex
              </a>{" "}
              (fingering or handjobs)
            </li>
            <li>
              Contact with{" "}
              <a
                href="https://www.scarleteen.com/glossary#pre-ejaculate"
                title="A fluid which the penis usually emits with or around erection and before ejaculation, sometimes more than once. Pre-ejaculate itself does not contain sperm, but in some cases, can pick up traces of sperm left in the urethra."
                class="lexicon-term"
              >
                pre-ejaculate
              </a>
              , but NOT during intercourse or direct genital-to-genital contact
            </li>
            <li>
              Touching yourself after you touched someone whose hand has touched
              their penis
            </li>
            <li>
              Having someone with a penis ejaculate on some part of the body
              other than your genitals, like your buttocks, back or breasts
            </li>
            <li>
              Direct genital-to-genital contact or direct contact with ejaculate
              when you and a partner have the same kinds of genitals (like each
              of you having a vulva or each of you having a penis)
            </li>
          </ul>
          <p>
            <strong>
              Situations like these are ways pregnancy can theoretically occur,
              but where it is not at all likely:
            </strong>
          </p>
          <ul>
            <li>
              Rubbing the vulva with hands that have recently touched semen
            </li>
            <li>
              Intercourse or other direct genital-to-genital or genital fluid
              contact where two (or more) reliable methods of contraception were
              used properly
            </li>
            <li>
              Unprotected{" "}
              <a
                href="https://www.scarleteen.com/glossary#anal_sex"
                title="Sexual activity involving the anus.  Anal sex may include stimulation with fingers, the mouth, a penis, sex toys, or other objects or body parts.
"
                class="lexicon-term"
              >
                anal sex
              </a>{" "}
              without{" "}
              <a
                href="https://www.scarleteen.com/glossary#ejaculation"
                title="In a sexual context, a discharge of genital fluid, usually (but not always) as a result of sexual stimulation and/or orgasm."
                class="lexicon-term"
              >
                ejaculation
              </a>
            </li>
          </ul>
          <h4>
            Are pregnancy scares a constant for you, or occurring even when
            you're not having the kinds of contact that can result in pregnancy
            in reality?
          </h4>
          <p>
            <strong>1)</strong> Do you know the facts about how pregnancy
            happens, and what can and cannot present real risks of pregnancy? If
            not, you can educate yourself{" "}
            <a href="http://www.scarleteen.com/article/bodies/can_i_get_pregnant_or_get_or_pass_on_an_sti_from_that">
              here
            </a>{" "}
            or{" "}
            <a href="http://www.scarleteen.com/article/bodies/where_did_i_come_from_a_refresher_course_in_human_reproduction">
              here
            </a>
            . If you already know the facts, or find that now that you have
            them, you still feel scared or can't believe them, then this
            probably isn't about a lack of education about reproduction.
          </p>
          <p>
            <figure style={{ width: "550px", float: "right" }}>
              <img
                alt=""
                src="https://www.scarleteen.com/sites/default/files/boundary.png"
                style={{
                  width: "500px",
                  height: "450px",
                  float: "right",
                  margin: "10px",
                }}
              />
              <div style={{ clear: "both" }}></div>
              <figcaption style={{ width: "510px", float: "right" }}>
                <strong>Comic text: </strong>Person 1 says "I have so much on my
                plate right now and anything with even the smallest risk of
                pregnancy is really stressing me out. I'd like to take a break
                from sex like that until things ease up for me. Is that okay?".
                Person 2 replies "Of course, I'm glad to support you."
              </figcaption>
            </figure>
            <strong>2)</strong> Do yourself a solid and take any kind of contact
            that is freaking you out like this off the table ASAP for now (that
            you can: for instance, if living in a house with family members who
            have a penis is freaking you out, you can't very well ask them to
            leave so you can deal). If you are not in a{" "}
            <a
              href="https://www.scarleteen.com/glossary#relationship"
              title='Some kind of ongoing interaction or association with another person, place or thing.

There are all kinds of relationships: family relationships, friendships, romantic relationships, and sexual relationships. Sometimes there is an overlap where we have more than one kind of relationship with someone. Sometimes people use the word relationship to only mean a romantic, "serious", or committed relationship, even though that&#039;s not all this word means.'
              class="lexicon-term"
            >
              relationship
            </a>{" "}
            where you feel you are allowed to have any limits you need with sex
            of any kind, that's a{" "}
            <a href="http://www.scarleteen.com/article/relationships/does_your_relationship_need_a_checkup">
              cue you're not in a healthy relationship or dynamic
            </a>
            , or just not yet able to assert yourself enough to manage sexual
            activity, so may need to{" "}
            <a href="http://www.scarleteen.com/article/abuse_assault/the_scarleteen_safety_plan">
              get yourself away from that relationship
            </a>
            , period. If you are stuck in a panic about this as a result of
            sexual abuse or assault, seeking out therapeutic support for you to
            learn to manage your feelings post-
            <a
              href="https://www.scarleteen.com/glossary#trauma"
              title="A serious or critical physical and/or emotional injury or physically and/or emotionally painful experience."
              class="lexicon-term"
            >
              trauma
            </a>{" "}
            will often help.
          </p>
          <p>
            <strong>3)</strong> Take some real time -- not hours or a few days,
            but a week or two or even a few months or more, whatever you need --
            to figure out what you need to have these kinds of contact
            comfortably and without panic. Only engage in that kind of contact
            again when you CAN have what you need to be comfortable, whether
            that's two methods of contraception, a different partner or kind of
            relationship, or counseling or therapy to help you with
            assertiveness, sexual fear or shame or an anxiety disorder.
          </p>
          <p>
            <strong>4)</strong> If none of the above has any big impact on your
            fears over the next few weeks or months, then it's time to seek out
            some help from a qualified mental health professional, like a
            counselor or therapist.
          </p>
          <hr style={{ marginTop: "2rem" }} />
          <p>
            <strong>
              Want more information about pregnancy scares, pregnancy,
              contraception and making sexual choices you feel comfortable with?
            </strong>
          </p>
          <ul className={classes.education_links}>
            <li>
              <Link to="/education/sexuality_wtf_is_it_anyway">
                Sexuality: WTF is it, anyway?
              </Link>
            </li>
            <li>
              <Link to="/education/navigating_consent">Navigating Consent</Link>
            </li>
            <li>
              <Link to="/education/sexual_anatomy">
                Sexual Anatomy for every body
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PregnancyPanic;
