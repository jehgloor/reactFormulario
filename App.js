import React, { Component } from 'react';

import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';


import PostAgendamento from './src/pages/Agendamento/PostAgendamento';
import PostCliente from './src/pages/Cliente/PostCliente';
import PostPet from './src/pages/Pet/PostPet';
import PostServico from './src/pages/Servico/PostServico';
// importe dos arquivos:
import api from './src/services/api';
// import Clientes from './src/componentes/Clientes';
import GetClientes from './src/pages/Cliente/GetCliente';
import GetAgendamento from './src/pages/Agendamento/GetAgendamento';
import Header from './src/componentes/Header';
import Menu from './src/componentes/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    //estado é o lugar onde vamos armazenar os agendamentos para exibir na tela

    this.state = {
      GetClientes: [],
      GetAgendamento: []
      
    }

  }

  async componentDidMount() {
    const response = await api.get('Cliente');
    const responseAgendamento = await api.get('Agendamento');
    this.setState({
      ... this.state,
      clientes: response.data,
      agendamentos: responseAgendamento.data,
      
    })
  }



  render() {
    return (
      <View >
       <Header carrierName={"Pet Shop CãoPeão"} />
       <Menu></Menu>
        <FlatList sytle={styles.list} 
          data={this.state.clientes}
          keyExtractor={item => item.idCliente.toString()}
          renderItem={({ item }) => <GetClientes data={item} />}
        />
          <FlatList sytle={styles.list} 
          data={this.state.agendamentos}
          keyExtractor={item => item.idAgendamento.toString()}
          renderItem={({ item }) => <GetAgendamento data={item} />}
        />


        {/* <View>
          <ScrollView>
            <PostAgendamento />
            <PostPet />
          </ScrollView>

        </View> */}


      </View>
    )
  }

};



export default App;


// export default function App() {
//   return (
//     <View>
//       <ScrollView>
//         <PostAgendamento />
//         <PostPet />
//       </ScrollView>

//     </View>

//     // <PostCliente></PostCliente>
//     // <PostServico></PostServico>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
})





////////////////////////////////// codigo comentado ////////////////////////


// import React, { Component } from 'react';

// import { StyleSheet, ScrollView, View, Text, FlatList } from 'react-native';


// import PostAgendamento from './src/pages/Agendamento/PostAgendamento';
// import PostCliente from './src/pages/Cliente/PostCliente';
// import PostPet from './src/pages/Pet/PostPet';
// import PostServico from './src/pages/Servico/PostServico';
// // importe dos arquivos:
// import api from './src/services/api';
// import Filmes from './src/componentes/Filmes';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     //estado é o lugar onde vamos armazenar os agendamentos para exibir na tela

//     this.state = {
//       filmes: []
//     }
//   }

//   // componentDidMount um metodo que é executado toda vez que o programe inicie= consulte minha api
//   async componentDidMount() {
//     const response = await api.get('r-api/?api=filmes');
//     // quando alterar o estado, dai quero alterar o estado do filme 
//     // tudo o que ele encontrou na url e armazenar no filmes
//     this.setState({
//       // o .data , é para pegar os dados que vem na response 
//       filmes: response.data
//     })
//   }

//   //interface grafica 
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* data = conteudo da lista 
//     keyExtractor = para cada filme tem uma chave para identificar
//     renderItem = é a forma que vai ser exibido a lista */}
//         <FlatList
//           data={this.state.filmes}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({ item }) => <Filmes data={item} />}
//         >


//         </FlatList>
//         {/* <View>
//           <ScrollView>
//             <PostAgendamento />
//             <PostPet />
//           </ScrollView>

//         </View> */}


//       </View>



//     )
//   }

// };


// export default App;


// // export default function App() {
// //   return (
// //     <View>
// //       <ScrollView>
// //         <PostAgendamento />
// //         <PostPet />
// //       </ScrollView>

// //     </View>

// //     // <PostCliente></PostCliente>
// //     // <PostServico></PostServico>
// //   );
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

