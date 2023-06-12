pub contract Donation {
    pub struct Work {
        pub id: Int
        pub title: String
        pub description: String
        pub url: String
    }

    pub var works: [Work]

    init() {
        self.works = []
    }

    pub fun addWork(obj: Work) {
        self.works.append(obj)
    }

    pub fun getWork(index: Int): Work {
        return self.works[index]
    }

    pub fun getAllWorks(): [Work] {
        return self.works
    }

    pub fun donate(amount: UInt64, recipient: Address): @Emitted(Transfer) {
        let sender = getAccount(self.account.address)

        pre {
            amount > 0: "Donation amount must be greater than zero"
            sender.balance >= amount: "Insufficient balance to make the donation"
        }

        sender.transfer(to: recipient, amount: amount)

        emit Transfer(
            from: self.account.address,
            to: recipient,
            amount: amount
        )
    }

    pub event Transfer(
        from: Address,
        to: Address,
        amount: UInt64
    )
}