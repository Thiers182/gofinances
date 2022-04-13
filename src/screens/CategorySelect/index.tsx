import React from 'react';
import { FlatList } from 'react-native';

import { Button } from '../../components/Form/Button';

import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

//foi criada essa interface pois no arquivo categories.ts pode ser procurado uma key ou um name
interface Category{
  key:string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void; // função que vai ser utilizada para atualizar o Estado. E colocamos void pois não irá retornar nada!
  closeSelectCategory: () => void; // Também vai ser uma função que não irá retornar nada mas vai servir para fechar o nosso modal
}

//A <Flatlist> vai se referir as categorias do arquivo categories.ts 
export function CategorySelect({category, setCategory, closeSelectCategory}:Props){

  function handleCategorySelect(category: Category){
    setCategory(category);
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

       
      <FlatList 
        data={categories}
        style={{flex: 1, width:'100%'}}
        keyExtractor={(item)=>item.key}
        renderItem={({item}) => (
          <Category
            onPress = { () => handleCategorySelect(item)}
            isActive = {category.key === item.key}
          >
            <Icon name={item.icon}/>
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={()=><Separator/>} //vai incluir um separador entre os componentes
      />

      <Footer>
          <Button
            title='Selecionar'
            onPress={closeSelectCategory} //para que feche o modal ao pressionar
          />
      </Footer>
      
    </Container>
  );
}