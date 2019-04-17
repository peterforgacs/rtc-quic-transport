import { h } from 'preact';
import style from './style';
import { SkillList, Skill } from './skill-list';

const Home = () => (
	<div class="landing-page mdl-color--grey-100 mdl-color-text--grey-700 mdl-base">
		<SkillList onClick={() => alert('test')}>
			<Skill icon='settings' title='Developing Node.js microsvervices' description='Designing and managing microservice architectures.' />
			<Skill icon='cloud' title='Deploying services on the cloud' description='Dockerizing applications and deploying them on cloud services.' />
			<Skill icon='people' title='Building peer to peer systems' description=' Real time communication systems with peer to peer focus.' />
			<Skill icon='videocam' title='Creating streaming solutions' description='Peer to peer multimedia streaming solutions.' />
		</SkillList>
	</div>
);

export default Home;
