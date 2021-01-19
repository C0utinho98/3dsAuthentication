#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Test, NSObject)
RCT_EXTERN_METHOD(start:(NSString *)name effort:(nonnull NSNumber *)effort)
RCT_EXTERN_METHOD(callbackEx:(NSDictionary *)params callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(startSdkProcess:(RCTResponseSenderBlock)callback)

@end
