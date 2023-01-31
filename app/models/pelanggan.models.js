module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            nama: String,
            umur: Number,
            alamat: String,
            kelas: String,
            ruangan: Number,
            checkin: Date,
            checkout: Date
        }, {timestamps: true}
    );
    schema.method('toJSON', function(){
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    });
    return mongoose.model('pelanggan', schema);
}