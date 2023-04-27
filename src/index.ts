((): void => {
  const URL: string =
    "https://port-0-skkuding-backend-study-duzu222alg4xhrks.sel3.cloudtype.app/restaurants/";
  const btnsArr: Array<HTMLButtonElement> = [
    ...document.querySelectorAll("button"),
  ];
  const restaurantNameInput: HTMLInputElement = document.querySelector(
    "#input-name"
  ) as HTMLInputElement;
  const reqBodyDataTextArea: HTMLInputElement = document.querySelector(
    "#req-body-data"
  ) as HTMLInputElement;
  const content: HTMLDivElement = document.querySelector(
    "#content"
  ) as HTMLDivElement;
  const camelize = (s: string) => s.replace(/-./g, (x) => x[1].toUpperCase());

  const render = (restaurants: any) => {
    // restaurants는 array이다.
    // restaurants를 content에 render한다.
    // content는 id가 content인 div이다. null일 수가 없다.
    content.innerHTML = "";
    restaurants.forEach((restaurant: any) => {
      const { name, address, phone } = restaurant;
      const div = document.createElement("div");
      div.innerHTML = `
        <h1>${name}</h1>
        <p>${address}</p>
        <p>${phone}</p>
        <hr />
      `;
      content.appendChild(div);
    });
  };

  const createReq = async () => {
    console.log("createReq 함수! 눌림");
    try {
      const reqBodyData: string = reqBodyDataTextArea.value;
      if (reqBodyData === "")
        throw new Error("요청 바디 데이터를 입력해주세요.");

      const reqBodyObj: Object = JSON.parse(reqBodyData);

      //reqBodyObj의 key들을 순회하면서 key가 name, address, phone 가 모두 있는지 확인한다.
      //만약 없으면 throw new Error를 한다.
      const keys: string[] = Object.keys(reqBodyObj);
      if (!keys.includes("name")) throw new Error("name이 없습니다.");
      if (!keys.includes("address")) throw new Error("address가 없습니다.");
      if (!keys.includes("phone")) throw new Error("phone이 없습니다.");

      //fetch로 post 요청을 보낸다.
      //fetch의 두번째 인자로 method, headers, body를 넣어준다.
      //body는 JSON.stringify로 string으로 만들어준다.
      //headers는 "Content-Type": "application/json"을 넣어준다.
      //그리고 await fetch로 요청을 보낸다.
      //그리고 await res.json()으로 응답을 받는다.
      //그리고 그 응답을 console.log로 찍어준다.
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBodyData,
      });
      const JSONData = await res.json();
      console.log(JSONData);
      readAllReq();
    } catch (err) {
      console.log(err);
    }
  };
  const readAllReq = async () => {
    console.log("readAllReq 함수! 눌림");
    try {
      const res = await fetch(URL);
      const JSONData = await res.json();
      console.log(JSONData);
      // JSONData.data가 array가 아니여도 array로 만든다. 그리고 그 array를 render 함수에 넣어준다.
      render(Array.isArray(JSONData.data) ? JSONData.data : [JSONData.data]);
    } catch (err) {
      console.log(err);
    }
  };
  const readReq = async () => {
    console.log("readReq 함수! 눌림");
    try {
      const restaurantName: string = restaurantNameInput.value;
      if (restaurantName === "") throw new Error("식당 이름을 입력해주세요.");

      const res = await fetch(`${URL}${restaurantName}`);
      const JSONData = await res.json();
      console.log(JSONData);
      // JSONData.data가 array가 아니여도 array로 만든다. 그리고 그 array를 render 함수에 넣어준다.
      render(Array.isArray(JSONData.data) ? JSONData.data : [JSONData.data]);
    } catch (err) {
      console.log(err);
    }
  };
  const putReq = async () => {
    console.log("putReq 함수! 눌림");
    try {
      const restaurantName: string = restaurantNameInput.value;
      if (restaurantName === "") throw new Error("식당 이름을 입력해주세요.");

      const reqBodyData: string = reqBodyDataTextArea.value;
      if (reqBodyData === "")
        throw new Error("요청 바디 데이터를 입력해주세요.");

      //fetch로 put 요청을 보낸다.
      //fetch의 두번째 인자로 method, headers, body를 넣어준다.
      //body는 JSON.stringify로 string으로 만들어준다.
      //headers는 "Content-Type": "application/json"을 넣어준다.
      //그리고 await fetch로 요청을 보낸다.
      //그리고 await res.json()으로 응답을 받는다.
      //그리고 그 응답을 console.log로 찍어준다.
      const res = await fetch(`${URL}${restaurantName}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBodyData,
      });
      const JSONData = await res.json();
      console.log(JSONData);
      readAllReq();
    } catch (err) {
      console.log(err);
    }
  };
  const patchReq = async () => {
    console.log("patchReq 함수! 눌림");

    try {
      const restaurantName: string = restaurantNameInput.value;
      if (restaurantName === "") throw new Error("식당 이름을 입력해주세요.");

      const reqBodyData: string = reqBodyDataTextArea.value;
      if (reqBodyData === "")
        throw new Error("요청 바디 데이터를 입력해주세요.");

      //fetch로 patch 요청을 보낸다.
      //fetch의 두번째 인자로 method, headers, body를 넣어준다.
      //body는 JSON.stringify로 string으로 만들어준다.
      //headers는 "Content-Type": "application/json"을 넣어준다.
      //그리고 await fetch로 요청을 보낸다.
      //그리고 await res.json()으로 응답을 받는다.
      //그리고 그 응답을 console.log로 찍어준다.
      const res = await fetch(`${URL}${restaurantName}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: reqBodyData,
      });
      const JSONData = await res.json();
      console.log(JSONData);
      readAllReq();
    } catch (err) {
      console.log(err);
    }
  };
  const deleteReq = async () => {
    console.log("deleteReq 함수! 눌림");
    try {
      const restaurantName: string = restaurantNameInput.value;
      if (restaurantName === "") throw new Error("식당 이름을 입력해주세요.");

      //fetch로 delete 요청을 보낸다.
      //fetch의 두번째 인자로 method, headers, body를 넣어준다.
      //body는 JSON.stringify로 string으로 만들어준다.
      //headers는 "Content-Type": "application/json"을 넣어준다.
      //그리고 await fetch로 요청을 보낸다.
      //그리고 await res.json()으로 응답을 받는다.
      //그리고 그 응답을 console.log로 찍어준다.
      const res = await fetch(`${URL}${restaurantName}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const JSONData = await res.json();
      console.log(JSONData);
      readAllReq();
    } catch (err) {
      console.log(err);
    }
  };

  btnsArr.forEach((btn) => {
    const callbackFuncName: string = camelize(btn.id.replace("-btn", ""));
    //callbackFuncName에 해당하는 함수를 addEventListener의 콜백으로 넣어준다.
    btn.addEventListener("click", eval(callbackFuncName));
  });
})();
