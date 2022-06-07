export const covid: any = (mongoose: any) => {
    const schema: any = mongoose.Schema(
        {
            penambahan: Object,
            total: Object,
            logHistory: Object
        },
        { timestamps: true }
    )

    const Data: any = mongoose.model("datanew", schema, "datanew")
    return Data
}