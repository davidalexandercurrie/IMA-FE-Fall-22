import './App.css';
import Card from './components/card';

const data = [
  {
    title: 'David Currie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1669799369787-23c78e3975df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Adnan Aga',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1670189577367-2c6ef31a4b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Lionel Messi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1669985390012-f369147f7790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'David Currie',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1669799369787-23c78e3975df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Adnan Aga',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1670189577367-2c6ef31a4b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Lionel Messi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolores blanditiis odit inventore excepturi enim, minus deserunt modi. Exercitationem numquam molestiae illum deserunt laborum vitae ipsam error voluptate iste temporibus!',
    url: 'https://images.unsplash.com/photo-1669985390012-f369147f7790?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="title">React Basic Example</h1>
      <div className="container">
        {data.map(({ title, description, url }, key) => (
          <Card
            title={title}
            description={description}
            url={url}
            key={key}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
