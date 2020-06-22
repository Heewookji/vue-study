export default {
    name: 'MessageListItem',
    template: `
    <li>{{ item.text}} - {{item.createdAt}}</li>
    <button @click="deleteClicked">X</button>
    `,
    props: {
        item: {
            type: String,
            required: true
        }
    },
    methods: {
        deleteClicked(){
            this.$emit('delete');
        }
    }
}
