import {createSearchParams, useNavigate, useSearchParams} from "react-router-dom";

const getNum = (param, defaultValue) => {
    if (!param) {
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove = () => {
    const navigate = useNavigate()

    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    const queryDefault = createSearchParams({page, size}).toString() // 새로 추가

    const moveToList = (pageParms) => {
        let queryStr = ""

        if (pageParms) {
            const pageNum = getNum(pageParms.page, page)
            const sizeNum = getNum(pageParms.size, size)

            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        } else {
            queryStr = queryDefault
        }

        navigate({
            pathname: `../list`,
            search: queryStr
        })
    }

    const moveToModify = (num) => {
        console.log(queryDefault)
        navigate({
            pathname: `../modify/${num}`,
            search: queryDefault // 수정시에 기존의 쿼리 스트링 유지를 위해
        })
    }

    const moveToRead = (num) => {
        console.log(queryDefault)
        navigate({
            pathname: `../read/${num}`,
            search: queryDefault
        })
    }

    return {moveToList, page, size, moveToModify, moveToRead} // moveToRead 추가
}

export default useCustomMove