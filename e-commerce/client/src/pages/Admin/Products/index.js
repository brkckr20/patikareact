import { useMemo } from 'react'

import { useQuery, useMutation, useQueryClient } from 'react-query';
import { fetchProductList, deleteProduct } from '../../../api'
import { Table, Popconfirm } from "antd";
import { Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Products = () => {
  const { isError, isLoading, data, error } = useQuery("admin:products", fetchProductList);


  const deleteMutation = useMutation(deleteProduct, {
    //refetchQueries: ["admin:products"]
  });

  const queryClient = useQueryClient();

  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price"
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt"
      },
      {
        title: "Action",
        dataIndex: "action",
        render: (text, record) => (
          <>
            <Link to={`/admin/product/${record._id}`} >Edit</Link>
            <Popconfirm
              title={"Emin misiniz?"}
              onConfirm={() => deleteMutation.mutate(record._id, {
                onSuccess: () => {
                  console.log("Kayıt Silindi...");
                  queryClient.invalidateQueries("admin:products") // silme işleminden sonra tekrar tablonun render edilmesi
                }

              })}
              onCancel={() => console.log("Silme işlemi iptal edildi..")}
              okText={`Evet`}
              cancelText={`Hayır`}
              placement="left"
            >
              <a href='/#' style={{ marginLeft: "10px" }}>Sil</a>
            </Popconfirm>
          </>
        )
      }
    ]
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error {error.message}</div>
  }



  return (
    <div>
      <Text fontSize="large">Products</Text>
      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </div>
  )
}

export default Products