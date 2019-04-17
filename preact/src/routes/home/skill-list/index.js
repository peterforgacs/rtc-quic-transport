import { h } from 'preact';

export const SkillList = ({ children }) => (
    <section class="skills section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div class="mdl-card mdl-cell mdl-cell--12-col">
            <div class="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                { children }
            </div>
            <div class="mdl-card__actions">
                <a href="#" class="mdl-button">More</a>
            </div>
        </div>
    </section>
);

export const Skill = ({ icon, title, description }) => (
<span>
    <div class="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
        <div class="skill-circle section__circle-container__circle mdl-color--primary">
            <i class="material-icons mdl-color-text--primary-contrast">
            {{ icon }}
            </i>
        </div>
    </div>
    <div class="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
        <h5>{{ title }}</h5>
        {{ description }}
    </div>
</span>
);