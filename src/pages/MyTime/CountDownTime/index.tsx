import React, {useState} from 'react';
import Footer from '@/components/Footer';



import { countDownTime } from '@/services/myTime/countDownTime';

import styles from './index.less';
import ProTable, {ProColumns} from "@ant-design/pro-table";

// const LoginMessage: React.FC<{
//   content: string;
// }> = ({content}) => (
//   <Alert
//     style={{
//       marginBottom: 24,
//     }}
//     message={content}
//     type="error"
//     showIcon
//   />
// );

const CountDownTime: React.FC = () => {

    useState<API.RuleListItem>();

    const handleCountDownTime = async (values: API.LoginParams) => {
      const msg = await countDownTime({...values,});
      console.log(msg);
    };


    const columns: ProColumns<API.CountDownTime>[] = [
      {
        title: '目标',
        tip: '目标',
        dataIndex: 'targetName'
      },
      {
        title: '目标',
        tip: '目标',
        dataIndex: 'expirationDate'
      }
    ]


    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <ProTable<API.CountDownTime, API.PageParams>
            headerTitle={'倒计时'}
            // actionRef={actionRef}
            rowKey="key"
            search={{
              labelWidth: 120,
            }}
            // toolBarRender={() => [
            //   <Button
            //     type="primary"
            //     key="primary"
            //     onClick={() => {
            //       handleModalVisible(true);
            //     }}
            //   >
            //     <PlusOutlined /> <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
            //   </Button>,
            // ]}
            request={countDownTime}
            columns={columns}
            // rowSelection={{
            //   onChange: (_, selectedRows) => {
            //     setSelectedRows(selectedRows);
            //   },
            // }}
          />

        </div>
        <Footer/>
      </div>
    );
  }
;

export default CountDownTime;
