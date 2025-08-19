import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products.store";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Detalles del producto",
    });
  }, [product]);

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-600">Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="mb-6 bg-gray-100 rounded-xl shadow-md p-5">
        <Text className="text-3xl font-extrabold text-gray-800 mb-2">
          {product.title}
        </Text>
        <Text className="text-base text-gray-700 mb-4">
          {product.description}
        </Text>
        <Text className="text-xl font-semibold text-green-600">
          ${product.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
