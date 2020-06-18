
export default {
   
    name: 'MessageList',
    template: `<ul>
    <li v-for="item in items">
        <message-list-item v-bind:item="item"></message-list-item>
    </li>
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
    }
};