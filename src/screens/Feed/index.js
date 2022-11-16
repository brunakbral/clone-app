import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import options from "../../../assets/options.png";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment.png";
import send from "../../../assets/send.png";
import save from "../../../assets/save.png";

export const Feed = () => {
  const posts = [
    {
      id: "1",
      author: "mochilando_",
      picture_url:
        "https://images.unsplash.com/photo-1599283787923-51b965a58b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtYm9kaWF8ZW58MHx8MHx8&w=1000&q=80",
      likes: "7,596",
      descricao: "Conhecendo as belezas e a cultura desse lugar incrível!",
      hashtags: "#camboja #angkorwat #trip",
      place: "Angkor Wat, Camboja",
    },
    {
      id: "2",
      author: "mochilando_",
      picture_url:
        "https://cdn.culturagenial.com/imagens/reflexotjml-cke.jpg?auto_optimize=low",
      likes: "15,485",
      descricao: "Uma das 7 maravilhas do mundo, e não é a toa!",
      hashtags: "#india #tajmahal #1das7maravilhas",
      place: " ताज महल Taj Mahal, India",
    },
    {
      id: "3",
      author: "mochilando_",
      picture_url:
        "https://coisasdojapao.com/wp-content/uploads/2020/02/tokyo-cidades-instagramaveisjpg_opt.jpg",
      likes: "615",
      descricao: "Me apaixonando por Tokio",
      hashtags: "#japao #tokio #luzesdetokio",
      place: "Tokyo, Japan",
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={Styles.post}>
        <View style={Styles.postHeader}>
          <View style={Styles.userInfo}>
            <Text style={Styles.author}>{post.author}</Text>
            <Text style={Styles.place}>{post.place}</Text>
          </View>

          <View Style={Styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={Styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={Styles.footer}>
          <View style={Styles.actions}>
            <View style={Styles.leftActions}>
              <TouchableOpacity style={Styles.action}>
                <Image source={like} />
              </TouchableOpacity>

              <TouchableOpacity style={Styles.action}>
                <Image source={comment} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={Styles.likes}>{post.likes} Likes</Text>
            <Text style={Styles.comment}>{post.descricao}</Text>
            <Text style={Styles.hashtags}>{post.hashtags}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  post: {
    marginVertical: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  place: {
    fontSize: 12,
    color: "#666",
  },
  picture_url: {
    width: "100%",
    height: 400,
  },
  footer: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  action: {
    marginRight: 8,
  },
  leftActions: {
    flexDirection: "row",
  },
  likes: {
    fontWeight: "bold",
    fontSize: 12,
  },
  hashtags: {
    color: "#002d5e",
  },
  descricao: {
    color: "#000",
    lineHeight: 18,
  },
});

export default Feed;
