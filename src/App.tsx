// App.tsx
function ProfileCard(props: { name: string; age: number; job: string; avatar: string }) {
  return (
    <div className="card">
      <img src={props.avatar} alt="프로필 이미지" />
      <h2>이름: {props.name}</h2>
      <p>나이: {props.age}세</p>
      <p>직업: {props.job}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <ProfileCard 
        name="김철수"
        age={25}
        job="프론트엔드 개발자"
        avatar="https://randomuser.me/api/portraits/men/1.jpg"
      />
      <ProfileCard 
        name="이영희"
        age={28}
        job="디자이너"
        avatar="https://randomuser.me/api/portraits/women/1.jpg"
      />
    </div>
  );
}

export default App;
