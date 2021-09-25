<template>
  <div class="main pt-5">
    <GoBack />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-8">
          <img :src="bookDetails.pic" alt="book image" class="book" />
          <div class="row mt-3" v-if="$store.state.isLogin">
            <div class="col-3">
              <a href="javascript:void(0)" @click="addToread">
                <i
                  class="fa fa-book px-2"
                  :class="{ golden: bookDetailsC.read }"
                  aria-hidden="true"
                ></i>
                <p class="fs-8">Read</p>
              </a>
            </div>
            <div class="col-4">
              <a href="javascript:void(0)" @click="addToreading"
                ><i
                  class="fa fa-book px-3"
                  :class="{ golden: bookDetailsC.reading }"
                  aria-hidden="true"
                ></i>
                <p class="fs-8">Reading</p></a
              >
            </div>
            <div class="col-5">
              <a href="javascript:void(0)" @click="addTowantread"
                ><i
                  class="fa fa-book px-4"
                  :class="{ golden: bookDetailsC.wantread }"
                  aria-hidden="true"
                ></i>
                <p class="fs-8">Want to read</p></a
              >
            </div>
          </div>
        </div>
        <div class="col-md-8 ps-md-3 col-12">
          <div class="min-height-250-px">
            <p class="fs-3">{{ bookDetailsC.name }}</p>
            <h2>Description</h2>
            <p>{{ bookDetailsC.description }}</p>
          </div>
          <div class="mt-5">
            <a
              :href="bookDetailsC.link"
              class="getbookbylink px-4 py-2"
              id="get-book"
              ><i class="fa fa-plus" aria-hidden="true"></i
              ><span class="ms-2">Get Book</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GoBack from "../components/GoBack.vue";
export default {
  components: {
    GoBack,
  },
  data: () => ({
    bookDetails: "",
  }),
  computed: {
    //  bookDetails()
    // {

    //     console.log("deatils" ,this.$store.state.bookdata)
    //     var data=this.$store.state.bookdata.find(book => book.id == this.bookid);
    //     console.log(data)
    //     return data;
    // }
    bookDetailsC() {
      return this.bookDetails;
    },
  },
  methods: {
    async addToread() {
      // https://airbook-app.herokuapp.com/read-book/3/
      // if(this.bookDetails.read)
      // {
      // this.bookDetails.read=false
      //   await axios
      //     .get(this.$store.state.BaseURLLocal + "check-user-status/")
      //     .then((response) => {
      //       console.log("user", response.data);
      //     });
      // console.log("user Status", resp1)
      //   await axios
      //     .get(this.$store.state.BaseURLLocal + "generate-token/")
      //     .then((response) => {
      //       console.log("token", response.data);
      //     });
      //   await axios
      //     .get(this.$store.state.BaseURLLocal + "show-library/", {
      //       headers: {
      //         Authorization:
      //           "Token" + " b7378021760d0a0ef34593ea4f8e6793386b3cee",
      //       },
      //     })
      //     .then((response) => {
      //       if (response.status === 200) {
      //         console.log(response.data);
      //       }
      //     });

      await axios
        .get(
          this.$store.state.BaseURLLocal +
            "read-book/" +
            this.$route.params.id +
            "/",
          {
            headers: {
              Authorization: "Token" + " " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("add to read", response.data);
            this.bookDetails.read = response.data.read;
          }
        });
    },
    async addTowantread() {
      await axios
        .get(
          this.$store.state.BaseURLLocal +
            "want-read-book/" +
            this.$route.params.id +
            "/",
          {
            headers: {
              Authorization: "Token" + " " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("add to wnat read", response.data);
            this.bookDetails.wantread = response.data.wantread;
          }
        });
      //   if (this.bookDetails.wantread) this.bookDetails.wantread = false;
      //   else this.bookDetails.wantread = true;
      //   console.log("add to wantread ", this.bookDetails.wantread);
    },
    async addToreading() {
      await axios
        .get(
          this.$store.state.BaseURLLocal +
            "reading-book/" +
            this.$route.params.id +
            "/",
          {
            headers: {
              Authorization: "Token" + " " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            console.log("add to read", response.data);
            this.bookDetails.reading = response.data.reading;
          }
        });
      //   if (this.bookDetails.reading) this.bookDetails.reading = false;
      //   else this.bookDetails.reading = true;
      //   console.log("add to reading ", this.bookDetails.reading);
    },
    //when first come to this page after logi show initial
    setbookstatus(libdata) {
      console.log("Library Data ", libdata);
      const read = libdata.read;
      const wanttoread = libdata.wantread;
      const reading = libdata.reading;
      console.log(read, wanttoread, reading);

      const readdata = read.find((e) => e.book_id == this.$route.params.id);
      const wantdata = wanttoread.find(
        (e) => e.book_id == this.$route.params.id
      );
      const readingdata = reading.find(
        (e) => e.book_id == this.$route.params.id
      );
      console.log("data", readdata);
      if (readdata) {
        this.bookDetails.read = true;
      }
      if (wantdata) {
        this.bookDetails.wantread = true;
      }
      if (readingdata) {
        this.bookDetails.reading = true;
      }
    },
  },
  created: async function () {
    console.log("axios description");
    await axios
      .get(
        this.$store.state.BaseURLLocal +
          "get-book/" +
          this.$route.params.id +
          "/"
      )
      .then((resp) => {
        console.log("Resp", resp);
        if (resp.status == 200) {
          this.bookDetails = resp.data;
        }
      });
    await axios
      .get(this.$store.state.BaseURLLocal + "show-library/", {
        headers: {
          Authorization: "Token" + " " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setbookstatus(response.data);
        }
      });
  },
};
</script>

<style scoped>
.main {
  padding-left: 350px;
}
.book {
  width: 98%;
  height: 340px;
}
.fs-8 {
  font-size: 14px;
}
a {
  color: white;
  text-decoration: none;
}
.golden {
  color: #ffb733;
}
.getbookbylink {
  border-radius: 10px;
  border: 1px solid white;
}
#get-book:hover {
  background-color: #494e44;
}
</style>
