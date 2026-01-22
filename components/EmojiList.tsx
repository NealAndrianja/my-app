import { useState } from "react";
import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet } from "react-native";

type Props = {
    onSelect: (image: ImageSourcePropType) => void;
    onCloseModal: () => void;
}

function EmojiList({ onSelect, onCloseModal }: Props) {

    const [emoji] = useState<ImageSourcePropType[]>([
        require('../assets/images/emoji-1.png'),
        require('../assets/images/emoji-2.png')
    ])

    return (
        <FlatList
            horizontal
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
                <Pressable
                    onPress={() => {
                        onSelect(item)
                        onCloseModal()
                    }}>
                    <Image source={item} style={styles.image} key={index}/>
                </Pressable>
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});

export default EmojiList