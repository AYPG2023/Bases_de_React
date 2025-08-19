import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products.store";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="p-4 mb-4 bg-white rounded-lg shadow">
            <Text className="text-lg font-bold">{item.title}</Text>
            <Text className="text-gray-600">{item.description}</Text>
            <Text className="text-green-600 mt-2">
              ${item.price.toFixed(2)}
            </Text>
            <Link
              href={{
                pathname: "/tabs/(stack)/products/[id]",
                params: { id: item.id.toString() },
              }}
              className="text-blue-600 mt-2"
            >
              Ver detalles
            </Link>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
