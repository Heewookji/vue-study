import MessageListItem from './MessageListItem.js';
export default {
    name: 'MessageList',
    template: `<ul>
        <message-list-item :key="item.id" v-for="item in items" :item="item" @delete="deleteMessage(item)">
        </message-list-item>
</ul>`,
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        deleteMessage(item) {
            this.$emit('delete', item);
        }
    },
    components: {
        MessageListItem
    }
};